'use client';

import { RefObject, useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

interface ScrollVideoProps {
  framePathPrefix: string;
  frameCount: number;
  framePadDigits?: number;
  scrollMultiplier?: number;
  children?: ReactNode;
  overlayStyle?: CSSProperties;
  className?: string;
  mask?: string;
  sectionRef?: RefObject<HTMLElement | null>;
}

export function ScrollVideo({
  framePathPrefix,
  frameCount,
  framePadDigits = 3,
  scrollMultiplier = 2,
  children,
  overlayStyle,
  className,
  mask,
  sectionRef: externalSectionRef,
}: ScrollVideoProps) {
  const internalSectionRef = useRef<HTMLElement>(null);
  const sectionRef = externalSectionRef ?? internalSectionRef;
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const [loadedCount, setLoadedCount] = useState(0);

  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current;
    const frames = framesRef.current;
    if (!canvas || frames.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img: HTMLImageElement | undefined = frames[idx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let i = idx - 1; i >= 0; i--) {
        const candidate = frames[i];
        if (candidate?.complete && candidate.naturalWidth > 0) {
          img = candidate;
          break;
        }
      }
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let i = idx + 1; i < frames.length; i++) {
          const candidate = frames[i];
          if (candidate?.complete && candidate.naturalWidth > 0) {
            img = candidate;
            break;
          }
        }
      }
      if (!img || !img.complete || img.naturalWidth === 0) return;
    }

    const { w, h } = sizeRef.current;
    if (w === 0 || h === 0) return;

    ctx.clearRect(0, 0, w, h);
    const canvasRatio = w / h;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    let dw: number;
    let dh: number;
    let dx: number;
    let dy: number;
    if (imgRatio > canvasRatio) {
      dh = h;
      dw = dh * imgRatio;
      dx = (w - dw) / 2;
      dy = 0;
    } else {
      dw = w;
      dh = dw / imgRatio;
      dx = 0;
      dy = (h - dh) / 2;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  useEffect(() => {
    let cancelled = false;
    const frames: HTMLImageElement[] = new Array(frameCount);
    framesRef.current = frames;
    setLoadedCount(0);

    const loadOne = (i: number) =>
      new Promise<void>((resolve) => {
        const n = String(i + 1).padStart(framePadDigits, '0');
        const img = new Image();
        img.decoding = 'async';
        img.src = `${framePathPrefix}${n}.webp`;
        frames[i] = img;
        const done = () => {
          if (cancelled) return resolve();
          setLoadedCount((c) => c + 1);
          if (i === 0) drawFrame(0);
          resolve();
        };
        if (img.complete && img.naturalWidth > 0) {
          done();
        } else {
          img.onload = done;
          img.onerror = done;
        }
      });

    (async () => {
      const priority = Math.min(12, frameCount);
      await Promise.all(
        Array.from({ length: priority }, (_, i) => loadOne(i))
      );
      if (cancelled) return;

      const batchSize = 12;
      for (let start = priority; start < frameCount; start += batchSize) {
        if (cancelled) return;
        const end = Math.min(start + batchSize, frameCount);
        await Promise.all(
          Array.from({ length: end - start }, (_, k) => loadOne(start + k))
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [framePathPrefix, frameCount, framePadDigits]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sticky = stickyRef.current;
    if (!canvas || !sticky) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = sticky.getBoundingClientRect();
      const cssW = Math.round(rect.width);
      const cssH = Math.round(rect.height);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w: cssW, h: cssH };
      drawFrame(currentFrameRef.current);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(sticky);
    window.addEventListener('orientationchange', resize);
    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', resize);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      rafRef.current = null;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        drawFrame(0);
        return;
      }
      const raw = -rect.top / scrollable;
      const progress = Math.max(0, Math.min(1, raw));
      const target = Math.round(progress * (frameCount - 1));
      if (target !== currentFrameRef.current) {
        currentFrameRef.current = target;
        drawFrame(target);
      }
    };

    const onScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [frameCount]);

  const initialReady = loadedCount >= 1;

  return (
    <section
      ref={sectionRef}
      className={className}
      style={{
        position: 'relative',
        height: `${scrollMultiplier * 100}vh`,
      }}
    >
      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#030712',
        }}
      >
        <canvas
          ref={canvasRef}
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            display: 'block',
            opacity: initialReady ? 1 : 0,
            transition: 'opacity 600ms ease-out',
            willChange: 'opacity',
          }}
        />
        {mask && (
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: mask,
              pointerEvents: 'none',
            }}
          />
        )}
        <div style={{ position: 'relative', width: '100%', height: '100%', ...overlayStyle }}>
          {children}
        </div>
      </div>
    </section>
  );
}

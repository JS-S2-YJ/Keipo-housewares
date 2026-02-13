'use client';

import { useState, useEffect } from 'react';

export const CyberClock = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return <div className="w-32 h-6 bg-white/5 animate-pulse rounded" />;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '-');
  };

  return (
    <div className="flex flex-col items-end font-mono text-xs tracking-widest text-cyber-cyan opacity-80">
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-white/40 uppercase">System Time:</span>
        <span className="neon-text-cyan">{formatTime(time)}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-white/40 uppercase">System Date:</span>
        <span>{formatDate(time)}</span>
      </div>
    </div>
  );
};

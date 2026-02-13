'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export const CyberClock = () => {
  const { t } = useLanguage();
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return <div style={{ width: '128px', height: '24px', backgroundColor: '#f5f5f7', borderRadius: '4px' }} />;

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '0.1em', color: '#86868b' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '10px', textTransform: 'uppercase' }}>{t('systemTime')}:</span>
        <span style={{ color: '#1d1d1f', fontWeight: 'bold' }}>{formatTime(time)}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '10px', textTransform: 'uppercase' }}>{t('systemDate')}:</span>
        <span style={{ color: '#1d1d1f' }}>{formatDate(time)}</span>
      </div>
    </div>
  );
};

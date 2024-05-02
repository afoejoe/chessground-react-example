'use client';

import { Chessground } from '@/components/Chessground';
import { useCG } from '@/hooks/useCG';
import { useEffect } from 'react';

export default function Page() {
  const { set } = useCG();

  useEffect(() => {
    setTimeout(() => {
      console.log('called');

      set({ lastMove: ['e2', 'e4'] }, 'last-move-crazy-house');
      setTimeout(() => set({ lastMove: ['g6'] }, 'last-move-crazy-house'), 1000);
      setTimeout(() => {
        set({ lastMove: ['e1'] }, 'last-move-crazy-house');
      }, 2000);
    });
  }, [set]);

  return <Chessground keyField="last-move-crazy-house" />;
}

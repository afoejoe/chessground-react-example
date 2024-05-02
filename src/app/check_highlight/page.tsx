'use client';

import { Chessground } from '@/components/Chessground';
import { useCG } from '@/hooks/useCG';
import { useEffect } from 'react';

export default function Page() {
  const { set } = useCG();

  useEffect(() => {
    set({ check: true }, 'check-highlight');
  }, [set]);

  return (
    <Chessground
      keyField="check-highlight"
      config={{
        fen: 'r1bqkbnr/1ppppBpp/p1n5/8/4P3/8/PPPP1PPP/RNBQK1NR b KQkq - 0 1',
        turnColor: 'black',
        check: 'black'
      }}
    />
  );
}

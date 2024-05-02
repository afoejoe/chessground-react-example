'use client';

import { Chessground } from '@/components/Chessground';
import { useCG } from '@/hooks/useCG';
import { aiPlay, toDests } from '@/lib/utils';
import { Chess } from 'chess.js';
import { useEffect, useMemo } from 'react';

export default function Page() {
  const chess = useMemo(() => new Chess(), []);
  const { cgs } = useCG();
  useEffect(() => {
    cgs.vs_random?.set({
      movable: {
        events: {
          after: aiPlay(cgs.vs_random, chess, 1000, false)
        }
      }
    });
  }, [cgs.vs_random, chess]);

  return (
    <Chessground
      keyField="vs_random"
      config={{
        movable: {
          color: 'white',
          free: false,
          dests: toDests(chess)
        }
      }}
    />
  );
}

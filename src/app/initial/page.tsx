'use client';

import { Chessground } from '@/components/Chessground';
import { useCG } from '@/hooks/useCG';
import { playOtherSide, toDests } from '@/lib/utils';
import { Chess } from 'chess.js';
import { useEffect, useMemo } from 'react';

export default function Page() {
  const { set, cgs } = useCG();
  const chess = useMemo(() => new Chess(), []);

  useEffect(() => {
    const res = playOtherSide(cgs.initial, chess);
    console.log({ res });

    setTimeout(() => {
      set(
        {
          movable: { events: { after: res } }
        },
        'initial'
      );
    });
  }, [cgs, chess, set]);

  return (
    <Chessground
      keyField="initial"
      config={{
        movable: {
          color: 'white',
          free: true,
          dests: toDests(chess)
        },
        draggable: {
          showGhost: true
        }
      }}
    />
  );
}

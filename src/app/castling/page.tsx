'use client';

import { Chessground } from '@/components/Chessground';
import { useCG } from '@/hooks/useCG';
import { playOtherSide, toColor, toDests } from '@/lib/utils';
import { Chess } from 'chess.js';
import { useEffect, useMemo } from 'react';

export default function Page() {
  const { set, cgs } = useCG();
  const fen = 'rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4';
  const chess = useMemo(() => new Chess(fen), []);

  useEffect(() => {
    set(
      {
        movable: { events: { after: playOtherSide(cgs.castling, chess) } }
      },
      'castling'
    );
  }, [cgs, chess, set]);

  return (
    <Chessground
      keyField="castling"
      config={{
        fen: fen,
        turnColor: toColor(chess),
        movable: {
          color: 'white',
          free: false,
          dests: toDests(chess)
        }
      }}
    />
  );
}

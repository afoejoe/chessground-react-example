import React, { FC, useLayoutEffect, useRef } from 'react';
import '@/assets/chessground.base.css';
import '@/assets/chessground.brown.css';
import '@/assets/chessground.cburnett.css';
import '@/assets/examples.css';
import { Chessground as CG } from 'chessground';
import { Config } from 'chessground/config';
import { Chess } from 'chess.js';
import { playOtherSide, toDests } from '@/lib/utils';

type ChessgroundProps = {
  width?: number;
  height?: number;
  config?: Config;
};

export const Chessground: FC<ChessgroundProps> = ({ width = 500, height = 500, config }) => {
  const chessgroundRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (chessgroundRef.current) {
      const chess = new Chess();

      const cg = CG(chessgroundRef.current, {
        ...config,
        movable: {
          free: false,
          color: 'both',
          dests: toDests(chess)
        }
      });

      cg.set({
        movable: { events: { after: playOtherSide(cg, chess) } }
      });
    }
  }, [config]);

  return <div style={{ width, height }} className="cg-wrap" ref={chessgroundRef} />;
};

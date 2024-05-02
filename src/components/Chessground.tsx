import { FC, useLayoutEffect, useRef } from 'react';
import '@/assets/chessground.base.css';
import '@/assets/chessground.brown.css';
import '@/assets/chessground.cburnett.css';
import '@/assets/examples.css';
import { Chessground as CG } from 'chessground';
import { Config } from 'chessground/config';
import { useCG } from '@/hooks/useCG';

type ChessgroundProps = {
  width?: number;
  height?: number;
  config?: Config;
  keyField: string;
};

export const Chessground: FC<ChessgroundProps> = ({ width = 500, height = 500, config, keyField }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { addCG, cgs } = useCG();

  useLayoutEffect(() => {
    console.log({
      ref,
      cgs
    });

    if (ref?.current && !cgs[keyField]) {
      const cg = CG(ref.current, config);
      addCG(cg, keyField);
    }

    return () => {
      cgs[keyField]?.destroy();
      delete cgs[keyField];
    };
  }, [addCG, cgs, config, keyField]);

  return <div style={{ width, height }} className="cg-wrap" ref={ref} />;
};

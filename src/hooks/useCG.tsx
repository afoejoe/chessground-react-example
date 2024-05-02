import { Api } from 'chessground/api';
import { Config } from 'chessground/config';
import { createContext, useCallback, useContext, useMemo, useState, type FC, type PropsWithChildren } from 'react';

export interface ICG {
  id: string;
}

interface ICGContext {
  set: (cg: Config, key: string) => void;
  addCG: (arg: Api, key: string) => void;
  cgs: Record<string, Api>;
}

const CGContext = createContext<ICGContext>({
  set: () => {},
  addCG: () => {},
  cgs: {}
});

export const CGProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [cgs, setCgs] = useState<Record<string, Api>>({});

  const set = useCallback(
    (cg: Config, key: string) => {
      cgs[key]?.set(cg);
    },
    [cgs]
  );

  const addCG = useCallback((cg: Api, key: string) => {
    setCgs((prev) => ({ ...prev, [key]: cg }));
  }, []);

  const value: ICGContext = useMemo(
    () => ({
      set,
      addCG,
      cgs
    }),
    [set, addCG, cgs]
  );

  return <CGContext.Provider value={value}>{children}</CGContext.Provider>;
};

export const useCG = () => {
  const context = useContext(CGContext);
  if (!context) {
    throw new Error('useCG must be used within CGProvider');
  }

  return context;
};

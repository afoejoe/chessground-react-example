'use client';

import { Chessground } from '@/components/Chessground';

export default function Page() {
  return (
    <Chessground
      config={{
        fen: '2r3k1/pp2Qpbp/4b1p1/3p4/3n1PP1/2N4P/Pq6/R2K1B1R w -',
        orientation: 'black'
      }}
      keyField="from-fen"
    />
  );
}

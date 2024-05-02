'use client';

import { Chessground } from '@/components/Chessground';

export default function Page() {
  return (
    <Chessground
      keyField="unselectable"
      config={{
        selectable: {
          enabled: false
        },
        draggable: {
          enabled: false
        }
      }}
    />
  );
}

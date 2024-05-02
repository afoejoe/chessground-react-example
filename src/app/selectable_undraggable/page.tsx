'use client';

import { Chessground } from '@/components/Chessground';

export default function Page() {
  return (
    <Chessground
      keyField="unselectable_draggable"
      config={{
        selectable: {
          enabled: true
        },
        draggable: {
          enabled: false
        },
        movable: {
          free: false
        }
      }}
    />
  );
}

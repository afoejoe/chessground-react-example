'use client';

import { Chessground } from '@/components/Chessground';

export default function Page() {
  return (
    <Chessground
      keyField="unselectable_draggable"
      config={{
        selectable: {
          enabled: false
        },
        draggable: {
          enabled: true,
          showGhost: false,
          deleteOnDropOff: false
        }
      }}
    />
  );
}

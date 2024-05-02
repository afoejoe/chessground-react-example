'use client';

import { Chessground } from '@/components/Chessground';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Config } from 'chessground/config';
import { useMemo, useState } from 'react';

enum Example {
  default = 'default',
  lastMove = 'lastMove',
  check = 'check',
  unselectable = 'unselectable',
  unselectableDraggable = 'unselectableDraggable',
  selectableDraggable = 'selectableDraggable',
  initialPosition = 'initialPosition',
  castling = 'castling',
  randomAI = 'randomAI',
  watch2RandomAI = 'watch2RandomAI',
  fen = 'fen'
}

export default function Home() {
  const [current, setCurrent] = useState<Example>(Example.default);
  const config: Config = useMemo(() => {
    let config: Config = {};
    switch (current) {
      case Example.default:
        config = {};
        break;

      case Example.fen:
        config = {
          fen: '2r3k1/pp2Qpbp/4b1p1/3p4/3n1PP1/2N4P/Pq6/R2K1B1R w -',
          orientation: 'black'
        };
        break;

      default:
        config = {};
        break;
    }
    return config;
  }, [current]);

  return (
    <main id="chessground-examples">
      <menu>
        <Button
          className={cn({ active: current === Example.default }, 'a')}
          onClick={() => setCurrent(Example.default)}
        >
          Default configuration
        </Button>
        <Button
          onClick={() => setCurrent(Example.lastMove)}
          className={cn({ active: current === Example.lastMove }, 'a')}
        >
          Last move: crazyhouse
        </Button>
        <Button onClick={() => setCurrent(Example.check)} className="a">
          Highlight king in check
        </Button>
        <Button>Unselectable, undraggable pieces</Button>
        <Button>Unselectable but undraggable pieces</Button>
        <Button>Selectable but undraggable pieces</Button>
        <Button>Play legal moves from initial position</Button>
        <Button>Castling</Button>
        <Button className="">Play vs random AI</Button>
        <Button>Watch 2 random AIs</Button>
        <Button>Play vs random AI; slow animations</Button>
        <Button>Conflicting hold/premove</Button>
        <Button>Perf: piece move</Button>
        <Button>Perf: square select</Button>
        <Button>Animation: conflict</Button>
        <Button>Animation: same role</Button>
        <Button>Animation: different role</Button>
        <Button>Animation: while holding</Button>
        <Button>Crazyhouse: lastMove = drop</Button>
        <Button>Preset user shapes</Button>
        <Button
          onClick={() => {
            setCurrent(Example.fen);
          }}
        >
          FEN and shapes
        </Button>
      </menu>
      <section className="blue merida">
        <div className="cg-wrap orientation-white manipulable">
          <Chessground config={config} />
        </div>
        <p>Default configuration</p>
      </section>
      {/* @ts-ignore */}
      <control>
        <button>Toggle orientation</button>
        <label className="zoom">
          Zoom <input type="number" value="100" />
        </label>
        {/* @ts-ignore */}
      </control>
    </main>
  );
}

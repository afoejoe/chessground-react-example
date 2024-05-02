'use client';

import { Inter } from 'next/font/google';
import './globals.css';
// these styles must be imported somewhere
import '../assets/chessground.base.css';
import '../assets/chessground.brown.css';
import '../assets/chessground.cburnett.css';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { EExample } from '@/lib/enum';
import { usePathname } from 'next/navigation';
import { CGProvider } from '@/hooks/useCG';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname().slice(1);

  return (
    <html lang="en">
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <main id="chessground-examples">
          <menu>
            <Link
              className={cn({ active: pathname === EExample.default || pathname === '' })}
              href={`/${EExample.default}`}
            >
              Default configuration
            </Link>
            <Link href={`/${EExample.fromFen}`} className={cn({ active: pathname === EExample.fromFen })}>
              From FEN, from black POV
            </Link>
            <Link
              href={`/${EExample.lastMoveCrazyHouse}`}
              className={cn({ active: pathname === EExample.lastMoveCrazyHouse })}
            >
              Last move: crazyhouse
            </Link>
            <Link href={`/${EExample.checkHighlight}`} className={cn({ active: pathname === EExample.checkHighlight })}>
              Highlight king in check
            </Link>
            <Link href={`/${EExample.unselectable}`} className={cn({ active: pathname === EExample.unselectable })}>
              Unselectable, undraggable pieces
            </Link>
            <Link
              href={`/${EExample.unselectableDraggable}`}
              className={cn({ active: pathname === EExample.unselectableDraggable })}
            >
              Unselectable but draggable pieces
            </Link>
            <Link
              href={`/${EExample.selectableUndraggable}`}
              className={cn({ active: pathname === EExample.selectableUndraggable })}
            >
              Selectable but undraggable pieces
            </Link>
            <Link href={`/${EExample.initial}`} className={cn({ active: pathname === EExample.initial })}>
              Play legal moves from initial position
            </Link>
            <Link href={`/${EExample.castling}`} className={cn({ active: pathname === EExample.castling })}>
              Castling
            </Link>
            <Link href={`/${EExample.vsRandom}`} className={cn({ active: pathname === EExample.vsRandom })}>
              Play vs random AI
            </Link>
            <Link href={`/${EExample.fullRandom}`} className={cn({ active: pathname === EExample.fullRandom })}>
              Watch 2 random AIs
            </Link>
            <Link href={`/${EExample.slowAnim}`} className={cn({ active: pathname === EExample.slowAnim })}>
              Play vs random AI; slow animations
            </Link>
            <Link
              href={`/${EExample.conflictingHold}`}
              className={cn({ active: pathname === EExample.conflictingHold })}
            >
              Conflicting hold/premove
            </Link>
            <Link href={`/${EExample.move}`} className={cn({ active: pathname === EExample.move })}>
              Perf: piece move
            </Link>
            <Link href={`/${EExample.select}`} className={cn({ active: pathname === EExample.select })}>
              Perf: square select
            </Link>
            <Link
              href={`/${EExample.conflictingAnim}`}
              className={cn({ active: pathname === EExample.conflictingAnim })}
            >
              Animation: conflict
            </Link>
            <Link href={`/${EExample.withSameRole}`} className={cn({ active: pathname === EExample.withSameRole })}>
              Animation: same role
            </Link>
            <Link href={`/${EExample.notSameRole}`} className={cn({ active: pathname === EExample.notSameRole })}>
              Animation: different role
            </Link>
            <Link href={`/${EExample.whileHolding}`} className={cn({ active: pathname === EExample.whileHolding })}>
              Animation: while holding
            </Link>
            <Link href={`/${EExample.lastMoveDrop}`} className={cn({ active: pathname === EExample.lastMoveDrop })}>
              Crazyhouse: lastMove = drop
            </Link>
            <Link
              href={`/${EExample.presetUserShapes}`}
              className={cn({ active: pathname === EExample.presetUserShapes })}
            >
              Preset user shapes
            </Link>
            <Link href={`/${EExample.fenAndShapes}`} className={cn({ active: pathname === EExample.fenAndShapes })}>
              FEN and shapes
            </Link>
            <Link href={`/${EExample.customSvg}`} className={cn({ active: pathname === EExample.customSvg })}>
              Custom SVG
            </Link>
          </menu>
          <section className="blue merida">
            <div className="cg-wrap orientation-white manipulable">
              <CGProvider>{children}</CGProvider>
            </div>
            <p>{pathname.replaceAll('_', ' ')}</p>
          </section>
        </main>
      </body>
    </html>
  );
}

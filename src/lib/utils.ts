import { SQUARES, Chess } from 'chess.js';
import { Api } from 'chessground/api';
import { Color, Dests } from 'chessground/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toDests(chess: Chess): Dests {
  const dests: Dests = new Map();
  SQUARES.forEach((s) => {
    const ms = chess.moves({ square: s, verbose: true });
    if (ms.length)
      dests.set(
        s,
        ms.map((m) => m.to)
      );
  });
  return dests;
}

export function toColor(chess: Chess): Color {
  return chess.turn() === 'w' ? 'white' : 'black';
}

export function playOtherSide(cg: Api, chess: Chess) {
  return (orig: any, dest: any) => {
    chess.move({ from: orig, to: dest });
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: toColor(chess),
        dests: toDests(chess)
      }
    });
  };
}

export function aiPlay(cg: Api, chess: Chess, delay: number, firstMove: boolean) {
  return (orig: string, dest: string) => {
    chess.move({ from: orig, to: dest });
    setTimeout(() => {
      const moves = chess.moves({ verbose: true });
      const move = firstMove ? moves[0] : moves[Math.floor(Math.random() * moves.length)];
      chess.move(move.san);
      cg.move(move.from, move.to);
      cg.set({
        turnColor: toColor(chess),
        movable: {
          color: toColor(chess),
          dests: toDests(chess)
        }
      });
      cg.playPremove();
    }, delay);
  };
}

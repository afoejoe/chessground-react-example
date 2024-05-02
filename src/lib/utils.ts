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
  return chess.turn() === 'w' ? 'black' : 'white';
}

export function playOtherSide(cg: Api, chess: Chess) {
  return (orig: string, dest: string) => {
    chess.move({ from: orig, to: dest });
    cg.set({
      turnColor: 'white',
      movable: {
        color: 'white',
        dests: toDests(chess)
      }
    });
  };
}

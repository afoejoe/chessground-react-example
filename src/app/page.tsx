'use client';

import { Chessground } from '@/components/Chessground';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Config } from 'chessground/config';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function Home() {
  return (
    <div className="cg-wrap orientation-white manipulable">
      <Chessground />
    </div>
  );
}

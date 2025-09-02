'use client';

import type { ReactNode } from 'react';
import { translateTree, type Dict } from './translateMarkers';

export function ClientTranslator({ children, dict }: { children: ReactNode; dict: Dict }) {
  return <>{translateTree(children, dict)}</>;
}


import { atomWithReset } from 'jotai/utils';
import type { ResponsiveLayouts } from 'react-grid-layout';
import { defaultLayouts } from '@/consts/layouts';

export const layoutsAtom = atomWithReset<ResponsiveLayouts>(defaultLayouts);

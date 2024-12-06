import { Layouts } from 'react-grid-layout';
import { defaultLayouts } from '@/consts/layouts';
import { atomWithReset } from 'jotai/utils';

export const layoutsAtom = atomWithReset<Layouts>(defaultLayouts);

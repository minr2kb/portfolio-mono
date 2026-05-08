import { Box } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useLayoutEffect, useMemo } from 'react';
import type { ResponsiveLayouts } from 'react-grid-layout';
import { Responsive, useContainerWidth } from 'react-grid-layout';
import { defaultLayouts } from '@/consts/layouts';
import useBreakPoint from '@/hooks/useBreakPoint';
import { layoutsAtom } from '@/store/atoms';
import { breakpointsNum } from '@/theme/breakpoints';

type BreakpointKeys = keyof typeof breakpointsNum;

interface GridLayoutProps {
  children?: React.ReactNode;
  gap?: number;
  padding?: number;
  itemRatio?: number;
  initialLayouts?: ResponsiveLayouts;
}

const cols: Record<BreakpointKeys, number> = {
  xs: 2,
  sm: 2,
  md: 3,
  lg: 4,
};

export default function GridLayout({
  children,
  gap = 16,
  padding = 16,
  itemRatio = 1 / 1,
  initialLayouts = defaultLayouts,
}: Readonly<GridLayoutProps>) {
  const [layouts, setLayouts] = useAtom(layoutsAtom);
  const { breakpoint: bp, isMobile } = useBreakPoint();
  const { width, containerRef, mounted } = useContainerWidth({
    measureBeforeMount: true,
  });

  const rowHeight = Math.ceil(
    (width - gap * (cols[bp] - 1)) / (cols[bp] * itemRatio),
  );

  const paddingBps = useMemo(
    () =>
      Object.entries(breakpointsNum).reduce<Record<BreakpointKeys, number>>(
        (acc, [key, value]) => {
          acc[key as BreakpointKeys] = value - padding * 2 - 1;
          return acc;
        },
        {} as Record<BreakpointKeys, number>,
      ),
    [padding],
  );

  useLayoutEffect(() => {
    setLayouts(initialLayouts);
  }, [initialLayouts, setLayouts]);

  return (
    <Box ref={containerRef} w='100%' maxW={breakpointsNum} mx='auto'>
      {mounted && (
        <Responsive
          width={width}
          layouts={layouts}
          breakpoints={paddingBps}
          cols={cols}
          rowHeight={rowHeight}
          margin={[gap, gap]}
          containerPadding={[padding, padding]}
          dragConfig={{ enabled: !isMobile, bounded: true, cancel: '.no-drag' }}
          onLayoutChange={(_layout, newLayouts) => {
            setLayouts(newLayouts);
          }}
        >
          {children}
        </Responsive>
      )}
    </Box>
  );
}

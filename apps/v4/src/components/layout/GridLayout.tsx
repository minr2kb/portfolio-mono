import useBreakPoint from '@/hooks/useBreakPoint';
import { layoutsAtom } from '@/store/atoms';
import { breakpointsNum as breakpoints } from '@/theme/breakpoints';
import { Box } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);
type ResponsiveGridLayoutProps = React.ComponentProps<typeof ResponsiveGridLayout>;
type BreakpointKeys = keyof typeof breakpoints;

interface GridLayoutProps extends ResponsiveGridLayoutProps {
  /**
   * 그리드 간격
   * @default 16
   */
  gap?: number;
  /**
   * 컨테이너 패딩
   * @default 16
   */
  padding?: number;
  /**
   * 아이템 비율 (row / col)
   * @default 1 / 1
   */
  itemRatio?: number;
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
  ...props
}: Readonly<GridLayoutProps>) {
  const [layouts, setLayouts] = useAtom(layoutsAtom);

  const { breakpoint: bp } = useBreakPoint();

  // 비율에 따른 행 높이
  const rowHeight = Math.ceil((breakpoints[bp] - padding * 2 - gap * (cols[bp] - 1)) / (cols[bp] * itemRatio));

  // 패딩을 고려한 브레이크포인트
  const paddingBps = Object.entries(breakpoints).reduce<Record<BreakpointKeys, number>>(
    (acc, [key, value]) => {
      acc[key as BreakpointKeys] = value - padding * 2 - 1;
      return acc;
    },
    {} as Record<BreakpointKeys, number>,
  );

  return (
    <Box maxW={breakpoints} mx={'auto'} p={`${padding}px`}>
      <ResponsiveGridLayout
        layouts={layouts}
        breakpoints={paddingBps}
        cols={cols}
        rowHeight={rowHeight}
        margin={[gap, gap]}
        containerPadding={[0, 0]}
        isBounded
        useCSSTransforms
        isDraggable={bp !== 'xs'}
        draggableCancel=".no-drag"
        onLayoutChange={(layout) => {
          setLayouts((prev) => ({ ...prev, [bp]: layout }));
        }}
        {...props}
      >
        {children}
      </ResponsiveGridLayout>
    </Box>
  );
}

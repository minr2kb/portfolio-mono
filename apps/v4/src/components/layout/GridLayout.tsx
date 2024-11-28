import { breakpointsNum as breakpoints } from '@/theme/breakpoints';
import { Box, useBreakpoint } from '@chakra-ui/react';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);
type ResponsiveGridLayoutProps = React.ComponentProps<typeof ResponsiveGridLayout>;
type BreakpointKeys = keyof typeof breakpoints;

interface GridLayoutProps extends ResponsiveGridLayoutProps {
  lgLayout: Layout[];
  mdLayout: Layout[];
  smLayout: Layout[];
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
  md: 4,
  lg: 4,
};

export default function GridLayout({
  lgLayout,
  mdLayout,
  smLayout,
  children,
  gap = 16,
  padding = 16,
  itemRatio = 1 / 1,
  ...props
}: Readonly<GridLayoutProps>) {
  const bp = useBreakpoint({
    breakpoints: Object.keys(breakpoints),
  }) as BreakpointKeys;

  // 비율에 따른 행 높이
  const rowHeight = Math.ceil((breakpoints[bp] - gap * (cols[bp] - 1)) / (cols[bp] * itemRatio));

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
        layouts={{ lg: lgLayout, md: mdLayout, sm: smLayout }}
        breakpoints={paddingBps}
        cols={cols}
        rowHeight={rowHeight}
        margin={[gap, gap]}
        containerPadding={[0, 0]}
        isBounded
        useCSSTransforms
        isDraggable={bp !== 'xs'}
        {...props}
      >
        {children}
      </ResponsiveGridLayout>
    </Box>
  );
}

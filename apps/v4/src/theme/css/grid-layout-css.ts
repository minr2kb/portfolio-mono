import { GlobalStyleObject } from '@chakra-ui/react';

const transitionDurations = {
  item: '{durations.slower}',
  shadow: '{durations.fast}',
  placeholder: '{durations.faster}',
};

export const gridLayoutCss: GlobalStyleObject = {
  '.react-grid-layout': {
    position: 'relative',
    transform: 'translateZ(0)',
  },
  '.react-grid-item': {
    transform: 'translate3d(0, 0, 0)',
    willChange: 'transform',
    transition: `transform ${transitionDurations.item} {easings.ease-in-out}, box-shadow ${transitionDurations.shadow} {easings.ease-in-out}, width 0.2s ease-in-out, height 0.2s ease-in-out`,
  },
  '.react-grid-item img': {
    pointerEvents: 'none',
    userSelect: 'none',
  },
  '.react-grid-item.resizing': {
    zIndex: '{zIndex.docked}',
    transition: 'none',
    willChange: 'transform',
    transform: 'translate3d(0, 0, 0) scale(1)',
  },
  '.react-grid-item.react-draggable-dragging': {
    zIndex: '{zIndex.overlay}',
    transition: 'none',
    willChange: 'transform',
    transform: 'translate3d(0, 0, 0)',
  },
  '.react-grid-item.dropping': {
    visibility: 'hidden',
  },
  '.react-grid-item.react-grid-placeholder': {
    zIndex: '{zIndex.dropdown}',
    userSelect: 'none',
    borderRadius: '{radii.2xl}',
    backgroundColor: '{colors.blackAlpha.50}',
    transitionDuration: transitionDurations.placeholder,
  },
};

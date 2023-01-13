import {color} from './color';
export const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 2, 4, 6, 8, 10, 12, 14, 16, 32, 64, 128, 256, 512],
  sizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    rubik: 'Rubik',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  radii: [0, 2, 4, 6, 8, 10, 12, 14, 16, 9999, '100%'],
  widths: {
    logo: 104,
    thumbnailWidth: 80,
  },
  heights: {
    filterSection: 70,
    filterInput: 50,
    itemHeight: 110,
    thumbnailHeight: 80,
  },
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    ...color,
  },
};

export type Theme = typeof theme;

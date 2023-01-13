import styled from 'styled-components/native';
import {
  color,
  space,
  ColorProps,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  position,
  shadow,
  PositionProps,
  ShadowProps,
} from 'styled-system';

const Image = styled.Image<
  ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    PositionProps &
    ShadowProps
>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;
export default Image;

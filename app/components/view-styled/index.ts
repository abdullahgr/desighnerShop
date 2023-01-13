import styled from 'styled-components/native';
import {
  typography,
  color,
  space,
  ColorProps,
  TypographyProps,
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

const View = styled.View<
  ColorProps &
    TypographyProps &
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
  ${typography}
  ${layout}
  ${flexbox}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;
export default View;

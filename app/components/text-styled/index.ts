import styled from 'styled-components/native';
import {
  typography,
  color,
  space,
  ColorProps,
  TypographyProps,
  SpaceProps,
  flexbox,
  FlexboxProps,
  compose,
} from 'styled-system';

const Text = styled.Text<
  ColorProps & TypographyProps & SpaceProps & FlexboxProps
>(compose(color, space, typography, flexbox));

export default Text;

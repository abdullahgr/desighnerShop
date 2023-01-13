import {TextInputProps} from 'react-native';
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
  LayoutProps,
  BorderProps,
} from 'styled-system';

const TextInput = styled.TextInput<
  ColorProps &
    TypographyProps &
    SpaceProps &
    FlexboxProps &
    LayoutProps &
    TextInputProps &
    BorderProps
>(compose(color, space, typography, flexbox));

export type TextInputType = typeof TextInput;

export default TextInput;

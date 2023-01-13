import styled from 'styled-components/native';
import {
  color,
  space,
  ColorProps,
  SpaceProps,
  flexbox,
  FlexboxProps,
  compose,
} from 'styled-system';

const ActivityIndicator = styled.ActivityIndicator<
  ColorProps & SpaceProps & FlexboxProps
>(compose(color, space, flexbox));

export default ActivityIndicator;

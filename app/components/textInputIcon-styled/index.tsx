import React, {createRef, FC} from 'react';
import TextInput from '../textInput-styled';
import View from '../view-styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import {TextInput as Input, TextInputProps} from 'react-native';
import {theme} from '../../theme';

type Props = {
  iconName: string;
  containerColor: string;
  containerWidth: number | string;
  iconColor: string;
};

const TextInputIcon: FC<
  Props &
    ColorProps &
    TypographyProps &
    SpaceProps &
    FlexboxProps &
    LayoutProps &
    TextInputProps &
    BorderProps
> = props => {
  const {iconName, containerColor, containerWidth, iconColor, ...rest} = props;
  const inputRef = createRef<Input>();
  return (
    <View
      flex={1}
      flexDirection={'row'}
      alignItems={'center'}
      width={containerWidth}
      borderRadius={theme.radii[3]}
      bg={containerColor}>
      <View pl={'10px'} pr={'10px'}>
        <Icon
          name={iconName}
          size={30}
          color={iconColor || theme.colors.filterIconColor}
          onPress={() => inputRef.current?.focus()}
        />
      </View>
      <TextInput ref={inputRef} {...rest} borderRadius={theme.radii[3]} />
    </View>
  );
};

export default TextInputIcon;

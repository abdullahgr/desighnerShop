import React, {FC} from 'react';
import {useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components';
import {Theme} from '../../theme';
import Text from '../text-styled';
import TouchableOpacity from '../touchableOpacity-styled';
import View from '../view-styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Header: FC = () => {
  const {height} = useWindowDimensions();
  const theme = useTheme() as Theme;
  return (
    <View
      flex={1}
      height={(height / 100) * 15}
      p={'10px'}
      backgroundColor={theme.colors.darkBlue}>
      <View flex={1} flexDirection={'row'} mb={'40px'}>
        <View
          flex={1}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          ml={'20px'}
          alignItems={'center'}>
          <Icon
            size={30}
            name="bluetooth-b"
            brand={true}
            color={theme.colors.white}
          />
          <Text
            pl={'5px'}
            color={theme.colors.white}
            fontWeight={theme.fontWeights[4]}
            fontSize={theme.fontSizes[3]}>
            100%
          </Text>
        </View>
        <View
          flex={1}
          flexDirection={'row'}
          justifyContent={'center'}
          ml={'20px'}
          alignItems={'center'}>
          <Icon size={30} color={theme.colors.white} name="wifi" />
        </View>
        <View
          flex={1}
          flexDirection={'row'}
          justifyContent={'flex-end'}
          mr={'20px'}
          alignItems={'center'}>
          <Ionicon
            name="cloud-done-outline"
            size={35}
            color={theme.colors.white}
          />
          {/* <Icon size={30} color={theme.colors.white} name="cloud" solid /> */}
        </View>
      </View>
      <View flex={1} flexDirection={'row'}>
        <TouchableOpacity
          flex={1}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          pl={'20px'}>
          <Icon name="angle-left" color={theme.colors.white} size={30} />
          <Text
            pl={'10px'}
            color={theme.colors.white}
            fontWeight={theme.fontWeights[5]}
            fontSize={theme.fontSizes[3]}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          flex={2}
          pl={'20px'}
          flexDirection={'row'}
          justifyContent={'center'}
          disabled>
          <Text
            color={theme.colors.white}
            fontWeight={theme.fontWeights[3]}
            fontSize={theme.fontSizes[3]}>
            Replenishment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          flex={1}
          pr={'20px'}
          flexDirection={'row'}
          justifyContent={'flex-end'}>
          <Text
            color={theme.colors.white}
            fontSize={theme.fontSizes[3]}
            fontWeight={theme.fontWeights[5]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

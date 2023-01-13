import React from 'react';
import View from '../view-styled';
import Text from '../text-styled';
import TouchableOpacity from '../touchableOpacity-styled';
import {theme} from '../../theme';
import {User} from '../../types';
import Image from '../image-styled';
import {ListRenderItem} from 'react-native';

const Item: ListRenderItem<User> = ({item}) => {
  return (
    <TouchableOpacity onPress={() => console.log('ITEM IS PRESSED: ', item)}>
      <View
        bg={theme.colors.itemBgColor}
        minHeight={theme.heights.itemHeight}
        borderBottomWidth={'1px'}
        // flex={1}
        width={'100%'}
        flexDirection={'row'}
        p={'10px'}
        borderBottomColor={theme.colors.grey}>
        <View flex={2} justifyContent={'center'}>
          <Image
            source={{uri: 'https://via.placeholder.com/150/474645'}}
            height={theme.heights.thumbnailHeight}
            width={theme.widths.thumbnailWidth}
          />
        </View>
        <View flex={4} flexDirection={'column'} justifyContent={'space-around'}>
          <Text color={theme.colors.grey}>{item.name ?? ''}</Text>
          <Text color={theme.colors.grey}>{item.username ?? ''}</Text>
          <Text color={theme.colors.grey}>{item.email ?? ''}</Text>
          <Text color={theme.colors.grey}>{item.phone ?? ''}</Text>
        </View>
        <View flex={2} flexDirection={'column'} justifyContent={'space-around'}>
          <Text color={theme.colors.grey}>{item.address?.city ?? ''}</Text>
          <Text color={theme.colors.grey}>{item.address?.street ?? ''}</Text>
          <Text color={theme.colors.grey}>{item.address?.suite ?? ''}</Text>
          <Text color={theme.colors.grey}>{item.address?.zipcode ?? ''}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

import React, {FC} from 'react';
import {Theme} from '../../theme';
import FlatList from '../flat-list-styled';
import Item from '../item';
import View from '../view-styled';
import {useTheme} from 'styled-components';

interface Props {
  items: Array<any>;
}

const Items: FC<Props> = ({items = []}) => {
  const theme = useTheme() as Theme;
  return (
    <View mb={theme.heights.itemHeight} bg={theme.colors.eggWhite}>
      <FlatList data={items} renderItem={Item} />
    </View>
  );
};

export default Items;

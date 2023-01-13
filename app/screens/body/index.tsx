import React from 'react';
import {useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from 'styled-components';
import {RootState} from '../../store';
import {Theme} from '../../theme';
import {User} from '../../types';
import {useGetDefaultData} from '../../utilities';
import Filters from '../../components/filters';
import Items from '../../components/items';
import View from '../../components/view-styled';

const Body = () => {
  const theme = useTheme() as Theme;
  const {height} = useWindowDimensions();
  const [data] = useGetDefaultData('/users');
  const filterQuery =
    useSelector((state: RootState) => state.root.filterQuery) || '';
  return (
    <View height={(height / 100) * 85} bg={theme.colors.eggWhite}>
      <Filters />
      <Items
        items={
          filterQuery.length > 0
            ? data.filter(
                (user: User) =>
                  user.name?.includes(filterQuery) ||
                  user.username?.includes(filterQuery) ||
                  user.email?.includes(filterQuery) ||
                  user.address?.city?.includes(filterQuery) ||
                  user.address?.street?.includes(filterQuery) ||
                  user.address?.suite?.includes(filterQuery) ||
                  user.address?.zipcode?.includes(filterQuery) ||
                  user.phone?.includes(filterQuery),
              )
            : data
        }
      />
    </View>
  );
};

export default Body;

import React from 'react';
import {useTheme} from 'styled-components';
import {Theme} from '../../theme';
import View from '../view-styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TouchableOpacity from '../touchableOpacity-styled';
import TextInputIcon from '../textInputIcon-styled';
import {useDispatch, useSelector} from 'react-redux';
import {
  setData,
  setFilterQuery,
  setLoader,
  setSortOrder,
} from '../../store/slices';
import _ from 'lodash';
import {RootState} from '../../store';

const Filters = () => {
  const theme = useTheme() as Theme;
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.root.data);
  const sortOrder = useSelector((state: RootState) => state.root.sortOrder);
  return (
    <View
      bg={theme.colors.white}
      height={theme.heights.filterSection}
      borderBottomWidth={1}
      borderBottomColor={theme.colors.grey}
      padding={5}
      pl={8}
      alignItems={'center'}
      flexDirection={'row'}>
      <TextInputIcon
        placeholder="Search"
        bg={theme.colors.lightGrey}
        placeholderTextColor={theme.colors.normalGrey}
        flex={1}
        height={theme.heights.filterInput}
        iconName="search"
        containerColor={theme.colors.lightGrey}
        containerWidth={'100%'}
        iconColor={theme.colors.normalGrey}
        borderRadius={theme.radii[4]}
        color={theme.colors.grey}
        onChangeText={(text: string) => {
          dispatch(setLoader(true));
          dispatch(setFilterQuery(text));
          dispatch(setLoader(false));
        }}
      />
      <TouchableOpacity
        pl={'20px'}
        onPress={() => {
          console.log('ALPHABETICAL SORT PRESSED');
        }}>
        <Icon
          size={30}
          name="sort-alpha-up"
          color={theme.colors.filterIconColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        pl={'20px'}
        onPress={() => {
          try {
            dispatch(setLoader(true));
            const newData = _.orderBy(
              data,
              ['name', 'username', 'email'],
              [sortOrder, sortOrder, sortOrder],
            );
            dispatch(setData(newData));
            if (sortOrder === 'asc') {
              dispatch(setSortOrder('desc'));
            } else {
              dispatch(setSortOrder('asc'));
            }
            dispatch(setLoader(false));
          } catch (error) {
            dispatch(setLoader(false));
            console.error('SORT COLLECTION(): ', error);
          }
        }}>
        <Icon
          size={30}
          name="sort-amount-down"
          color={theme.colors.filterIconColor}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Filters;

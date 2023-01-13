import React, {FC} from 'react';
import {useTheme} from 'styled-components';
import {Theme} from '../../theme';
import ActivityIndicator from '../activity-indicator-styled';
import Modal from '../modal-styled';
import View from '../view-styled';
interface Props {
  visible: boolean;
}
const MainLoader: FC<Props> = ({visible = false}) => {
  const theme = useTheme() as Theme;
  return (
    <Modal animationType="fade" transparent={true} visible={visible} flex={1}>
      <View
        flex={1}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}>
        <ActivityIndicator size={'large'} color={theme.colors.darkBlue} />
      </View>
    </Modal>
  );
};

export default MainLoader;

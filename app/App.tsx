/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import Header from './components/header';
import {Theme} from './theme';
import {useTheme} from 'styled-components';
import Body from './screens/body';
import MainLoader from './components/main-loader';
import {useSelector} from 'react-redux';
import {RootState} from './store';

const App = () => {
  const theme = useTheme() as Theme;
  const loading = useSelector((state: RootState) => state.root.loader);
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.white}}>
      <StatusBar backgroundColor={theme.colors.darkBlue} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: theme.colors.white}}>
        <Header />
      </ScrollView>
      <Body />
      <MainLoader visible={loading} />
    </SafeAreaView>
  );
};

export default App;

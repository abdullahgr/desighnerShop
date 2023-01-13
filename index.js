/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './app/store/index';
import {ThemeProvider} from 'styled-components';
import {theme} from './app/theme';

const Index = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
AppRegistry.registerComponent(appName, () => Index);

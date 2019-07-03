/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'rxjs';

import { Provider } from 'react-redux';
import React from 'react';

import { setTopLevelNavigator } from './app/navigation/NavigationService';
import AppContainer from './app/navigation';
import store from './app/state/store';

export default () => (
  <Provider store={store}>
    <AppContainer
      ref={navigatorRef => {
        setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

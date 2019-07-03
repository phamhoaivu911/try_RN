import { NavigationActions } from 'react-navigation';

// eslint-disable-next-line
let _navigator;

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

const navigateTo = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

export { navigateTo, setTopLevelNavigator };

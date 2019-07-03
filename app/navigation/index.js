import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default createAppContainer(
  createSwitchNavigator({
    AuthStack,
    MainStack,
  }),
  {
    initialRouteName: 'AuthStack',
  }
);

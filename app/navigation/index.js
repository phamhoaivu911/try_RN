import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../components/Login';
import MainStack from './MainStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login,
      MainStack,
    },
    {
      initialRouteName: 'MainStack',
    }
  )
);

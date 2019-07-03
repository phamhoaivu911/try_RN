import { createStackNavigator } from 'react-navigation';

import Login from '../components/Login';

const AuthStack = createStackNavigator(
  {
    Login,
  },
  {
    headerMode: 'none',
  }
);

export default AuthStack;

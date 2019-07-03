import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Home from '../components/Home';
import Setting from '../components/Setting';

const HomeStack = createStackNavigator({
  Home,
});

const SettingStack = createStackNavigator({
  Setting,
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Setting: SettingStack,
  },
  {}
);

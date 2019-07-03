import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import BookDetail from '../components/BookDetail';
import Home from '../components/Home';
import Setting from '../components/Setting';

const HomeStack = createStackNavigator({
  Home,
  BookDetail,
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

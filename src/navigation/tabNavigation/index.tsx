import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/tab.screens/home.tab.screens/Home';
import FavouratesScreen from '../../screens/tab.screens/favourates.tab.screens/Favourates';
import ProfileScreen from '../../screens/tab.screens/profile.tab.screen/Profile';
import {Routes} from '../route';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{title: 'tabs', headerShown: false}}
      />
      <Tab.Screen
        name={Routes.FAVOURATES}
        component={FavouratesScreen}
        options={{title: 'tabs', headerShown: false}}
      />
      <Tab.Screen
        name={Routes.PROFILE}
        component={ProfileScreen}
        options={{title: 'tabs', headerShown: false}}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;

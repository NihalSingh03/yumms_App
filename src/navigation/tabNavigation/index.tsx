import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/tab.screens/home.tab.screens/Home';
import FavouratesScreen from '../../screens/tab.screens/favourates.tab.screens/Favourates';
import ProfileScreen from '../../screens/tab.screens/profile.tab.screen/Profile';
import {Routes} from '../route';
import {Image} from 'react-native';
import {theme} from '../../infrastructure/theme';
import {images} from '../../assets/images';
import {WidthHeight} from '../../components/style';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={focused ? images.homeFocused : images.home}
              style={WidthHeight(24, 24)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.FAVOURATES}
        component={FavouratesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={focused ? images.favouritesFocused : images.favourites}
              style={WidthHeight(24, 24)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={focused ? images.profileFocused : images.profile}
              style={WidthHeight(24, 24)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;

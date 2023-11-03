import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../route';
import TabNavigator from '../tabNavigation';
import RegisterScreen from '../../screens/stack.screens/auth.stack.screens/Register.screen/Register';
import SplashScreen from '../../screens/stack.screens/splash.screens/splash';
import ProfileScreen from '../../screens/tab.screens/profile.tab.screen/Profile';

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.PROFILE}
        component={ProfileScreen}
        options={{title: 'tabs', headerShown: false}}
      />
      <Stack.Screen
        name={Routes.SPLASHSCREEN}
        component={SplashScreen}
        options={{title: 'tabs', headerShown: false}}
      />
      <Stack.Screen
        name={Routes.REGISTERSCREEN}
        component={RegisterScreen}
        options={{title: 'tabs', headerShown: false}}
      />

      <Stack.Screen
        name={Routes.TABNAVIGATOR}
        component={TabNavigator}
        options={{title: 'tabs', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

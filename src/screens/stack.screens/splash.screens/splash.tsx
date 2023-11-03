//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getDataFromAsyncStorage} from '../../../utils/asyncStorage.utils';
import {CommonActions, useNavigation} from '@react-navigation/core';
import {Routes} from '../../../navigation/route';

// create a component
const SplashScreen = ({navigation}: any) => {
  
  const navigateReset = (screen: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: screen}],
      }),
    );
  };

  const fetchUserFromAsyncStorage = async () => {
    const userInfo = await getDataFromAsyncStorage('user');
    if (userInfo.data) {
      setTimeout(() => {
        navigateReset(Routes.TABNAVIGATOR);
      }, 1000);
    } else {
      setTimeout(() => {
        navigateReset(Routes.REGISTERSCREEN);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchUserFromAsyncStorage();
  }, []);

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default SplashScreen;

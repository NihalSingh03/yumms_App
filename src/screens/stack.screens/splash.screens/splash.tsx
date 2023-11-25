//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {getDataFromAsyncStorage} from '../../../utils/asyncStorage.utils';
import {CommonActions, useNavigation} from '@react-navigation/core';
import {Routes} from '../../../navigation/route';
import {
  Container,
  deviceHeight,
  deviceWidth,
} from '../../../components/layput.components';
import {images} from '../../../assets/images';
import {WidthHeight} from '../../../components/style';
import {theme} from '../../../infrastructure/theme';

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
      <Image source={images.AppLogo} style={WidthHeight(200, 120)} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundMain,
  },
});

//make this component available to the app
export default SplashScreen;

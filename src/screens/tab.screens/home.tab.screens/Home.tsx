//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Spacer, deviceHeight} from '../../../components';
import {images} from '../../../assets/images';
import {WidthHeight} from '../../../components/style';
//import { HeaderHeightContext } from '@react-navigation/native-stack';
//import { useHeaderHeight } from '@react-navigation/native-stack';

// create a component
const HomeScreen = ({navigation}: any) => {
  const statusbarHeight = StatusBar.currentHeight;

  const tabBarHeight = useBottomTabBarHeight();
  const actualHeight = deviceHeight - tabBarHeight - statusbarHeight!;
  console.log(actualHeight * 0.4);
  const redContainerHeight = actualHeight * 0.4;

  return (
    <View>
      <View
        style={{
          backgroundColor: 'red',
          height: redContainerHeight,
          padding: 16,
        }}>
        <Image
          source={images.avatar}
          style={WidthHeight(redContainerHeight - 88, redContainerHeight - 88)}
        />
        <Spacer top={40} />
        <Text>Hello Nihal</Text>
      </View>
      <View
        style={{
          ...styles.container,
          height: actualHeight * 0.6,
        }}>
        <Text>HomeScreen</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

//make this component available to the app
export default HomeScreen;

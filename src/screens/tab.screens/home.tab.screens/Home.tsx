//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  Column,
  Container,
  Row,
  Spacer,
  deviceHeight,
  deviceWidth,
} from '../../../components/layput.components';

import {theme} from '../../../infrastructure/theme';
import {images} from '../../../assets/images';

//import { HeaderHeightContext } from '@react-navigation/native-stack';
//import { useHeaderHeight } from '@react-navigation/native-stack';

// create a component
const HomeScreen = ({navigation}: any) => {
  const statusbarHeight = StatusBar.currentHeight;

  const tabBarHeight = useBottomTabBarHeight();
  const actualHeight = deviceHeight - tabBarHeight - statusbarHeight!;
  // console.log(actualHeight * 0.4);
  const topContainerHeight = actualHeight * 0.3;
  const screenwidth = deviceWidth - 16;

  return (
    <View style={styles.container}>
      <Column>
        {/* Top Container */}

        <Column
          alignItems="center"
          style={{
            height: actualHeight * 0.3,
            width: screenwidth,
          }}>
          <Row>
            <Container
              alignItems="center"
              justifyContent="space-between"
              width={screenwidth}
              height={topContainerHeight * 0.3}
              padding={10}
              backgroundColor={theme.colors.backgroundMain}>
              <Image
                source={images.backArrow}
                style={{
                  width: 30,
                  height: 26,
                }}
              />

              <Image
                source={images.AppLogoicon}
                style={{
                  width: 110,
                  height: 40,
                }}
              />

              <Image
                source={images.filterIcon}
                style={{
                  width: screenwidth * 0.06,
                  height: topContainerHeight * 0.12,
                }}
              />
            </Container>
          </Row>
          <Spacer top={20} />
          <Row>
            <Container
              width={screenwidth - 16}
              height={topContainerHeight * 0.25}
              backgroundColor={theme.colors.white}
              borderRadius={theme.borderRadius.borderRadius4}
              borderWidth={2}
              justifyContent="flex-start">
              <TextInput
                placeholder="Search Recipie"
                style={{
                  width: screenwidth - 70,
                  height: topContainerHeight * 0.25,
                  paddingLeft: theme.padding.pd20,
                }}
                // onChangeText={onChangeText}
              />
              <Container
                width={50}
                height={topContainerHeight * 0.23}
                alignItems="center"
                borderRadius={theme.borderRadius.borderRadius4}
                backgroundColor={theme.colors.white}>
                <Image
                  source={images.searchIcon}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </Container>
            </Container>
          </Row>
          <Spacer top={20} />
          <ScrollView horizontal={true}>
            <Pressable>
              <Text>helllooo</Text>
            </Pressable>
          </ScrollView>
        </Column>

        {/* Bottom Container */}

        <Column
          style={{
            height: actualHeight * 0.7,
            width: screenwidth,
            backgroundColor: theme.colors.headerDarkGreen,
          }}>
          <Text>hello</Text>
        </Column>
      </Column>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundMain,
    padding: 16,
  },
});

//make this component available to the app
export default HomeScreen;

// <View
// style={{
//   backgroundColor: 'red',
//   height: redContainerHeight,
//   padding: 16,
// }}>
// <Image
//   source={images.avatar}
//   style={WidthHeight(redContainerHeight - 88, redContainerHeight - 88)}
// />
// <Spacer top={40} />
// <Text>Hello Nihal</Text>
// </View>
// <View
// style={{
//   ...styles.container,
//   height: actualHeight * 0.6,
// }}>

// <Text>HomeScreen</Text>
// </View>

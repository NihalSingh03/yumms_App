//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Pressable, Image} from 'react-native';
import useViewModal from './profileViewModal';
import {images} from '../../../assets/images';
import {
  Column,
  Container,
  CustomText,
  RootComponents,
  Row,
  Spacer,
  deviceHeight,
  deviceWidth,
} from '../../../components/layput.components';
import {WidthHeight} from '../../../components/style';
// create a component
const ProfileScreen = ({navigation}: any) => {
  const {handleLogout, handlePickPhoto, profileImage} =
    useViewModal(navigation);

  return (
    <View style={styles.container}>
      <Column
        alignItems="center"
        style={{width: deviceWidth - 32, flex: 1, backgroundColor: '#fff'}}>
        <Spacer top={30} />
        <RootComponents.CustomText fontSize={32} color="#43615A">
          Profile
        </RootComponents.CustomText>
        <Spacer top={30} />
        <Row>
          <Image
            source={profileImage == !null ? profileImage : images.avatar}
            style={WidthHeight(150, 150)}
          />
        </Row>
        <Spacer top={60} />
        <Column alignItems="center" justifyContent="center">
          <Container
            justifyContent="space-between"
            alignItems="center"
            width={deviceWidth - 64}
            height={56}
            padding={12}
            margin={10}
            backgroundColor="#F3F6F8"
            borderRadius={6}>
            <Row alignItems="center">
              <Image
                source={images.contactSupport}
                style={WidthHeight(30, 30)}
              />
              <Spacer left={10} />
              <CustomText color="#4C5863">Contact Support</CustomText>
            </Row>
            <Row>
              <Image source={images.arrow} style={WidthHeight(18, 28)} />
            </Row>
          </Container>
          <Container
            justifyContent="space-between"
            alignItems="center"
            width={deviceWidth - 64}
            height={56}
            padding={12}
            margin={10}
            backgroundColor="#F3F6F8"
            borderRadius={6}>
            <Row alignItems="center">
              <Image source={images.tc} style={WidthHeight(24, 30)} />
              <Spacer left={10} />
              <CustomText color="#4C5863">Terms and Conditions</CustomText>
            </Row>
            <Row>
              <Image source={images.arrow} style={WidthHeight(18, 28)} />
            </Row>
          </Container>
          <Container
            justifyContent="space-between"
            alignItems="center"
            width={deviceWidth - 64}
            height={56}
            padding={12}
            margin={10}
            backgroundColor="#F3F6F8"
            borderRadius={6}>
            <Row alignItems="center">
              <Image source={images.lock} style={WidthHeight(24, 28)} />
              <Spacer left={10} />
              <CustomText color="#4C5863">Privacy Policy</CustomText>
            </Row>
            <Row>
              <Image source={images.arrow} style={WidthHeight(18, 28)} />
            </Row>
          </Container>
          <Container
            justifyContent="space-between"
            alignItems="center"
            width={deviceWidth - 64}
            height={56}
            padding={12}
            margin={10}
            backgroundColor="#F3F6F8"
            borderRadius={6}>
            <Row alignItems="center">
              <Image source={images.delete} style={WidthHeight(22, 26)} />
              <Spacer left={10} />
              <CustomText color="#4C5863">Delete Account</CustomText>
            </Row>
            <Row>
              <Image source={images.arrow} style={WidthHeight(18, 28)} />
            </Row>
          </Container>
          <Button title="Logout" onPress={handleLogout} />
        </Column>
      </Column>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: 300,
    height: 300,
    // marginBottom: 200,
    // marginTop: 100,
    borderRadius: 150,
  },
  profileImage: {
    width: 300,
    height: 100,
    borderRadius: 150,
  },
});

//make this component available to the app
export default ProfileScreen;

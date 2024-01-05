//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
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
import {theme} from '../../../infrastructure/theme';
import {fontweight} from '../../../infrastructure/theme/fonts';

// create a component
const ProfileScreen = ({navigation}: any) => {
  const {
    handleLogout,
    handleOpenGallery,
    userDetails,
    profilePickModal,
    handleTakePicture,
    handleProfilePhoto,
    handleCancleProfileUpdate,
  } = useViewModal(navigation);

  return (
    <View style={styles.container}>
      {/* Change profile modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={profilePickModal}>
        <Container
          flex={1}
          flexDirection='column'
          alignItems="flex-end"
          width={deviceWidth}
          height={deviceHeight}
          backgroundColor={"rgba(14, 89, 86, 0.2)"}>
          <Pressable onPress={() => handleCancleProfileUpdate()}>
            <Container
              flexDirection="column"
              borderRadius={10}
              alignItems="center"
              width={deviceWidth }
              height={deviceHeight * 0.7}
              backgroundColor={"none"}></Container>
          </Pressable>
          <Container
            flexDirection="column"
            borderRadius={10}
            alignItems="center"
            margin={20}
            width={deviceWidth - 32}
            height={deviceHeight * 0.25}
            backgroundColor={theme.colors.white}>
            {/* Take Picture button */}
            <Pressable onPress={() => handleTakePicture()}>
              <Container
                backgroundColor={theme.colors.headerDarkGreen}
                width={deviceWidth - 64}
                height={56}
                borderRadius={6}
                margin={5}
                alignItems="center">
                <CustomText
                  fontFamily={theme.fontFamily.headerFont}
                  fontSize={theme.fontSize.fontSize20}>
                  Take Picture
                </CustomText>
              </Container>
            </Pressable>
            {/* Choose from gallery button */}
            <Pressable onPress={() => handleOpenGallery()}>
              <Container
                backgroundColor={theme.colors.headerDarkGreen}
                width={deviceWidth - 64}
                height={56}
                borderRadius={6}
                margin={5}
                alignItems="center">
                <CustomText
                  fontFamily={theme.fontFamily.headerFont}
                  fontSize={theme.fontSize.fontSize20}>
                  Open Gallery
                </CustomText>
              </Container>
            </Pressable>
            {/*  Cancle button */}
            <Pressable onPress={() => handleCancleProfileUpdate()}>
              <Container
                backgroundColor={theme.colors.headerDarkGreen}
                width={deviceWidth - 64}
                height={56}
                borderRadius={6}
                margin={5}
                alignItems="center">
                <CustomText
                  fontFamily={theme.fontFamily.headerFont}
                  fontSize={theme.fontSize.fontSize20}>
                  Cancle
                </CustomText>
              </Container>
            </Pressable>
          </Container>
        </Container>
      </Modal>

      <Column
        alignItems="center"
        style={{
          width: deviceWidth - 32,
          flex: 1,
          backgroundColor: theme.colors.backgroundMain,
        }}>
        <Spacer top={30} />
        <RootComponents.CustomText fontSize={32} color="#43615A">
          Profile
        </RootComponents.CustomText>
        <Spacer top={30} />
        <Row>
          <Pressable onPress={() => handleProfilePhoto()}>
            <Image
              source={
                userDetails.photoURL
                  ? {uri: userDetails.photoURL}
                  : images.avatar
              }
              style={{...WidthHeight(150, 150), borderRadius: 75}}
            />
          </Pressable>
        </Row>
        <Spacer top={60} />
        {/* contact Support */}

        <Column alignItems="center" justifyContent="center">
          <Container
            justifyContent="space-between"
            alignItems="center"
            width={deviceWidth - 64}
            height={56}
            padding={12}
            margin={10}
            backgroundColor={theme.colors.white}
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
          {/* Terms and Conditions */}
          <Container
            justifyContent="space-between"
            alignItems="center"
            width={deviceWidth - 64}
            height={56}
            padding={12}
            margin={10}
            backgroundColor={theme.colors.white}
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
          {/* Privacy policy */}
          <Container
            justifyContent="space-between"
            alignItems="center"
            width={deviceWidth - 64}
            height={56}
            padding={12}
            margin={10}
            backgroundColor={theme.colors.white}
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
          {/* delete account */}
          <Container
            justifyContent="space-between"
            alignItems="center"
            width={deviceWidth - 64}
            height={56}
            padding={12}
            margin={10}
            backgroundColor={theme.colors.white}
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
          <Spacer top={20} />
          <Pressable onPress={handleLogout}>
            <Container
              backgroundColor={theme.colors.headerDarkGreen}
              width={200}
              height={56}
              borderRadius={6}
              alignItems="center">
              <CustomText
                fontFamily={theme.fontFamily.headerFont}
                fontSize={theme.fontSize.fontSize20}>
                Logout
              </CustomText>
            </Container>
          </Pressable>
        </Column>
      </Column>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundMain,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  profileModalContainer: {
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'flex-end',
    backgroundColor: theme.colors.yelloOrange,
  },
  profileImage: {
    width: 300,
    height: 100,
    borderRadius: 150,
  },
});

export default ProfileScreen;

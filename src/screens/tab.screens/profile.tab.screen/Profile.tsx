//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Pressable, Image} from 'react-native';
import useViewModal from './profileViewModal';
import {images} from '../../../assets/images';
import {RootComponents, deviceHeight, deviceWidth} from '../../../components';
import {WidthHeight} from '../../../components/style';
// create a component
const ProfileScreen = ({navigation}: any) => {
  const {handleLogout, handlePickPhoto, profileImage} =
    useViewModal(navigation);

  return (
    <View style={styles.container}>
      <RootComponents.Column
        justifyContent="space-between"
        backgroundColor="none"
        minHeight={deviceHeight}>
        <RootComponents.Column
          backgroundColor="#EDF3F4"
          justifyContent="flex-start"
          width={deviceWidth}
          maxHeight={deviceHeight * 0.4}>
          <RootComponents.Spacer top={30} />
          <RootComponents.CustomText fontSize={32} color="#43615A">
            Profile
          </RootComponents.CustomText>
          <RootComponents.Spacer top={30} />
          <RootComponents.Row
            minHeight={150}
            minWidth={150}
            backgroundColor="#000"
            borderRadius={200}>
            <Image
              source={profileImage == !null ? profileImage : images.avatar}
              style={WidthHeight(150, 150)}
            />
          </RootComponents.Row>
        </RootComponents.Column>

        <RootComponents.Column
          flex={0.6}
          minHeight={deviceHeight * 0.5}></RootComponents.Column>
      </RootComponents.Column>

      {/* <Pressable onPress={handlePickPhoto}>
        <View style={styles.profileContainer}>
          <Image
            source={profileImage == !null ? profileImage : images.AppLogo}
            style={styles.profileImage}
          />
        </View>
      </Pressable> */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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

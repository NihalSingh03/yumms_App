import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import useViewModal from './registerViewModal';
import {images} from '../../../../assets/images';
import {RootComponents} from '../../../../components';
import {
  deviceHeight,
  deviceWidth,
} from '../../../../infrastructure/theme/spacing';
import {WidthHeight} from '../../../../components/style';

const RegisterScreen = (props: any) => {
  const {navigation} = props;
  const {handleGoogleSignin} = useViewModal({navigation});

  return (
    <View style={styles.container}>
      <RootComponents.Row
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width={deviceWidth}
        maxHeight={deviceHeight}>
        <ImageBackground
          source={images.registerScreen}
          style={styles.background}
          resizeMode="cover">
          <RootComponents.Row
            flex={1}
            maxHeight={deviceHeight * 0.65}
            alignItems="flex-end"
            backgroundColor="none">
            <Image source={images.AppLogo} style={styles.appLogo} />
          </RootComponents.Row>

          <RootComponents.Row
            flex={1}
            alignItems="center"
            maxHeight={deviceHeight * 0.35}
            width={deviceWidth}
            backgroundColor="none">
            <Pressable onPress={handleGoogleSignin}>
              <RootComponents.Button
                backgroundColor="#EA4335"
                width={deviceWidth - 72}
                borderRadius={8}>
                <Image source={images.googleIcon} style={WidthHeight(30, 30)} />
                <RootComponents.Spacer right={10} />
                <RootComponents.CustomText>
                  Login with Google
                </RootComponents.CustomText>
              </RootComponents.Button>
            </Pressable>
          </RootComponents.Row>
        </ImageBackground>
      </RootComponents.Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Pacifico Regular',
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogo: {
    width: deviceWidth - 70,
    height: 200,
  },
  LoginBtn: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Rubik Medium',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: 1.44,
    wordWrap: 'break-word',
  },
});

export default RegisterScreen;

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {setDataInAsyncStorage} from '../../../../utils/asyncStorage.utils';
import {Routes} from '../../../../navigation/route';
import {CommonActions} from '@react-navigation/native';

export default function useViewModal({navigation}: any) {

  const navigateReset = (screen: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: screen}],
      }),
    );
  };
  const handleGoogleSignin = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const data = await auth().signInWithCredential(googleCredential);
      await setDataInAsyncStorage('user', data.user);

      if (data.additionalUserInfo?.isNewUser) {
        // send user to additional user info page.
      } else {
        // Send user to home screen.
        // navigation.navigate(Routes.TABNAVIGATOR);
        navigateReset(Routes.TABNAVIGATOR);
        console.log('else block');
      }
    } catch (error) {
      console.log('error block');
      console.log(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '93578325065-038i8otdp0900j375v2cl9ignotogd3t.apps.googleusercontent.com',
    });
  }, []);
  return {handleGoogleSignin};
}

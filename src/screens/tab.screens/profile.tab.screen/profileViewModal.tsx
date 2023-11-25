import {clearAllDataFromAsyncStorage} from '../../../utils/asyncStorage.utils';
import {Routes} from '../../../navigation/route';
import {useContext, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {UserContext} from '../../../context/userData.context';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function useViewModal(navigation: any) {
  const {userDetails, updateUserDetail} = useContext(UserContext);

  const handlePickPhoto = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        freeStyleCropEnabled: true,
        cropping: true,
      });
      updateUserDetail({...userDetails, photoURL: image.path});
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    const clearConformation = await clearAllDataFromAsyncStorage();
    console.log(clearConformation);
    navigation.navigate(Routes.REGISTERSCREEN);
  };

  return {handleLogout, handlePickPhoto, userDetails};
}

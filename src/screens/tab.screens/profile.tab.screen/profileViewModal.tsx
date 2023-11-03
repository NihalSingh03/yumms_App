import {clearAllDataFromAsyncStorage} from '../../../utils/asyncStorage.utils';
import {Routes} from '../../../navigation/route';
import {useState} from 'react';
// import ImagePicker from 'react-native-image-crop-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function useViewModal(navigation: any) {
  const [profileImage, setProfileImage] = useState({});
  const handlePickPhoto = async () => {
    // try {
    //   const image = await ImagePicker.openPicker({
    //     width: 300,
    //     height: 400,
    //     freeStyleCropEnabled:true,
    //     cropping: true,
    //   });
    //   setProfileImage(image);
    //   console.log(profileImage);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleLogout = async () => {
    const clearConformation = await clearAllDataFromAsyncStorage();
    console.log(clearConformation);
    navigation.navigate(Routes.REGISTERSCREEN);
  };

  return {handleLogout, handlePickPhoto, profileImage};
}

import {clearAllDataFromAsyncStorage} from '../../../utils/asyncStorage.utils';
import {Routes} from '../../../navigation/route';
import {useContext, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {UserContext} from '../../../context/userData.context';
import {fileUploadServices} from '../../../resource/fileUpload';
// import {useCameraPermission} from 'react-native-vision-camera';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function useViewModal(navigation: any) {
  const {userDetails, updateUserDetail} = useContext(UserContext);
  const [profilePickModal, setProfilePickModal] = useState(false);
  // const {hasPermission, requestPermission} = useCameraPermission();
  const handleOpenGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        freeStyleCropEnabled: true,
        cropping: true,
      });
      console.log("running")
      const uri = await fileUploadServices.uploadFile(image.path, 'image');
      console.log('uri', uri);
      updateUserDetail({...userDetails, photoURL: uri});
    } catch (error) {
      console.log(error);
    }
  };
  const handleProfilePhoto = () => {
    setProfilePickModal(true);
  };

  const handleTakePicture = async () => {
    // if (!hasPermission) {
    //   await requestPermission();
    // }
  };

  const handleProfileModal = () => setProfilePickModal(!profilePickModal);

  const handleCancleProfileUpdate = () =>
    setProfilePickModal(!profilePickModal);

  const handleLogout = async () => {
    const clearConformation = await clearAllDataFromAsyncStorage();
    console.log(clearConformation);
    navigation.navigate(Routes.REGISTERSCREEN);
  };

  return {
    handleLogout,
    handleOpenGallery,
    userDetails,
    profilePickModal,
    handleTakePicture,
    handleProfilePhoto,
    handleCancleProfileUpdate,
  };
}

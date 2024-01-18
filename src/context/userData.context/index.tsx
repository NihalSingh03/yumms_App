import {createContext, useEffect, useState} from 'react';
import {
  getDataFromAsyncStorage,
  setDataInAsyncStorage,
} from '../../utils/asyncStorage.utils';

export const UserContext = createContext<any>({userDetails: {}});

export const UserContextProvider = (props: any) => {
  const [userDetails, setUserDetails] = useState({});
  const updateUserDetail = async (paylode: any) => {
    setUserDetails(paylode);
    await setDataInAsyncStorage('user', paylode);
  };
  const value = {userDetails, setUserDetails, updateUserDetail};
  useEffect(() => {
    const getDataFromStorage = async () => {
      const response = await getDataFromAsyncStorage('user');
      if (response.data) {
        setUserDetails(response.data);
      }
    };
    getDataFromStorage();
  }, []);
  // console.log('user Data----->>>>>', userDetails);
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

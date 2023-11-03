import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataFromAsyncStorage = async (key: string) => {
  let response;
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;
    response = {success: true, message: 'Data get successfully', data};
  } catch (e: any) {
    response = {success: false, message: e.message};
  }

  return response;
};

export const setDataInAsyncStorage = async (key: string, value: any) => {
  let response;
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    response = {success: true, message: 'Data set successfully.'};
  } catch (e: any) {
    response = {success: false, message: e.message};
  }
  return response;
};

export const deleteDataFromAsyncStorage = async (key: string) => {
  let response;
  try {
    await AsyncStorage.removeItem(key);
    response = {success: true, message: 'Data delete successfully.'};
  } catch (e: any) {
    response = {success: false, message: e.message};
  }
  return response;
};
export const clearAllDataFromAsyncStorage = async () => {
  let response;
  try {
    await AsyncStorage.clear();
    response = {success: true, message: 'All data clear successfully.'};
  } catch (e: any) {
    response = {success: false, message: e.message};
  }
  return response;
};

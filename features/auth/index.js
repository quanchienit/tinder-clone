import AsyncStorage from '@react-native-async-storage/async-storage';

export async function checkLogin() {
  const token = await AsyncStorage.getItem('token');
  return !!token;
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../features/main';
import UserDetailScreen from '../features/main/UserDetailScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UserDetail" component={UserDetailScreen}
        options={{ headerShown:'false', presentation: 'modal', animation: 'slide_from_bottom' }}/>
    </Stack.Navigator>
  );
}

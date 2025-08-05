import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../features/main';
import DetailScreen from '../features/main/DetailScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="HomeMain" component={MainScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

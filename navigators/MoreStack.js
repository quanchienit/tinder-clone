import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { MoreScreen } from '../features/main/more';
export default function KhamPhaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="KhamPha" component={MoreScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

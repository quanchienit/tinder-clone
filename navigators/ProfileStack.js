// navigators/ProfileStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../features/profile/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

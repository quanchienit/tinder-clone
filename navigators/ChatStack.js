import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../features/main';
import DetailScreen from '../features/main/DetailScreen';
import ChatScreen from '../features/chat/ChatScreen'; // Assuming you have a ChatScreen component

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatMain" component={ChatScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

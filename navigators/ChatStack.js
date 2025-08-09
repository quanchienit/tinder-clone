import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../features/main';
import DetailScreen from '../features/main/UserDetailScreen';
import ChatScreen from '../features/chat/ChatScreen'; // Assuming you have a ChatScreen component
import {ChatDetail} from '../features/chat'
const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal', // hiệu ứng từ dưới lên
      }}
    >
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ChatDetail" component={ChatDetail} 
        options={{headerShown:true,  headerTitle:'SNDJAHS', presentation: 'modal', animation: 'slide_from_right' }}/>
    </Stack.Navigator>
  );
}

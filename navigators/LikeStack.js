import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../features/main/UserDetailScreen';
import  LikeScreen  from '../features/like/LikeScreen';

const Stack = createNativeStackNavigator();

export default function LikeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Like" component={LikeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

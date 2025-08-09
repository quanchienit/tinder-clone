// App.js
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStack from './navigators/MainStack';
import ProfileStack from './navigators/ProfileStack';
import ChatStack from './navigators/ChatStack';
import LikeStack from './navigators/LikeStack';
import MoreStack from './navigators/MoreStack';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();
function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={MainStack} />
      <Tab.Screen name="Explore" component={MoreStack} />
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="Likes" component={LikeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }} >
          <RootStack.Screen component={Tabs} name="Tab" />
        </RootStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

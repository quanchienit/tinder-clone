// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStack from './navigators/MainStack';
import ProfileStack from './navigators/ProfileStack';
import ChatStack from './navigators/ChatStack';
import LikeStack from './navigators/LikeStack';
import MoreStack from './navigators/MoreStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={MainStack} />
        <Tab.Screen name="Explore" component={MoreStack} />
        <Tab.Screen name="Chat" component={ChatStack} />
        <Tab.Screen name="Likes" component={LikeStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

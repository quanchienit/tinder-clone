import { View, Text, Button } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Xem chi tiết" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

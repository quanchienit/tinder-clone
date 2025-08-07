import { View, Text, Button } from 'react-native';

export default function ChatScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Danh sách Nhắn tin ở đây</Text>
      <Button title="Xem chi tiết" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

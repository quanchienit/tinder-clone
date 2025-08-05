import { View, Text, Button } from 'react-native';

export default function LikeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Xem các lượt thích ở đây</Text>
      <Button title="Xem chi tiết" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

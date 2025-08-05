import { View, Text, Button } from 'react-native';

export default function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chi tiết màn hình</Text>
      <Button title="Quay lại" onPress={() => navigation.goBack()} />
    </View>
  );
}

import { View, Text, Button } from 'react-native';

export default function MoreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Trang Kham Pha Them Cac Nhom O Đây</Text>
      <Button title="Khám Phá" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

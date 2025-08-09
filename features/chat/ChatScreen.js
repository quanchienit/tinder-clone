import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatList from './ChatList';
import { useNavigation } from '@react-navigation/native';


export default function ChatScreen() {
  const navigation = useNavigation();

  const chatData = [
    {
      id: '1',
      name: 'Linh Nguyễn',
      avatar: 'https://i.pravatar.cc/150?img=1',
      lastMessage: 'Hôm nay bạn rảnh không?',
      time: '14:20',
      unread: 2,
    },
    {
      id: '2',
      name: 'Minh Trần',
      avatar: 'https://i.pravatar.cc/150?img=2',
      lastMessage: 'Ok, để mai nhé!',
      time: 'Hôm qua',
      unread: 0,
    },
    {
      id: '3',
      name: 'Hoa Lê',
      avatar: 'https://i.pravatar.cc/150?img=3',
      lastMessage: 'Bạn ăn trưa chưa?',
      time: '10:15',
      unread: 1,
    },
    {
      id: '4',
      name: 'Tuấn Anh',
      avatar: 'https://i.pravatar.cc/150?img=4',
      lastMessage: 'Đang bận chút, nhắn sau nhé!',
      time: '09:45',
      unread: 0,
    },
    {
      id: '5',
      name: 'Hà My',
      avatar: 'https://i.pravatar.cc/150?img=5',
      lastMessage: 'Đi cà phê không?',
      time: '08:30',
      unread: 4,
    },
  ];

  return (
    <View style={styles.container}>
      <ChatList
        data={chatData}
        onPressItem={(item) => navigation.navigate('ChatDetail', { user: item })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

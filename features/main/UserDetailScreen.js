import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function UserDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { user } = route.params;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Image source={{ uri: user.photo }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>

        <Pressable onPress={() => navigation.goBack()} style={styles.closeBtn}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Đóng</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10
  },
  closeBtn: {
    marginTop: 15,
    backgroundColor: '#ff5555',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20
  }
});

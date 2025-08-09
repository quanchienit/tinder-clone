import React, { useEffect } from "react";
import { View, Text, StyleSheet, Modal, Animated, Dimensions, TouchableOpacity } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const InfoBottomSheet = ({ visible, onClose, user }) => {
  const slideAnim = new Animated.Value(SCREEN_HEIGHT);

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none">
      <TouchableOpacity style={styles.backdrop} onPress={onClose} />
      <Animated.View style={[styles.sheet, { transform: [{ translateY: slideAnim }] }]}>
        <Text style={styles.title}>{user.name}, {user.age}</Text>
        <Text>{user.bio}</Text>
        <Text>Sở thích: {user.interests?.join(", ")}</Text>
        <Text>Khoảng cách: {user.distance} km</Text>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  sheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 300,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default InfoBottomSheet;

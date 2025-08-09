import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const SwipeButtons = ({ onUndo, onDislike, onSuperLike, onLike, onMessage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onUndo} style={[styles.btn, { backgroundColor: "#FFC107" }]}>
        <Text>⟲</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDislike} style={[styles.btn, { backgroundColor: "#FF4E50" }]}>
        <Text>✖</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSuperLike} style={[styles.btn, { backgroundColor: "#1E90FF" }]}>
        <Text>★</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLike} style={[styles.btn, { backgroundColor: "#4CAF50" }]}>
        <Text>❤</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onMessage} style={[styles.btn, { backgroundColor: "#9C27B0" }]}>
        <Text>💬</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default SwipeButtons;

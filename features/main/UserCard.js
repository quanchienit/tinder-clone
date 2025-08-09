import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import InfoBottomSheet from "./InfoBottomSheet";
import SwipeButtons from "./SwipeButtons";
import { useNavigation } from "@react-navigation/native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 120;


const UserCard = ({ user, onSwipeLeft, onSwipeRight }) => {
  const navigation = useNavigation();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue(0);
  const cardOpacity = useSharedValue(1);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < user.photos.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const renderInfo = () => {
    switch (index) {
      case 0: return `${user.distance} km`;
      case 1: return user.bio;
      case 2: return user.interests?.join(", ");
      default: return user.interests?.join(", ");
    }
  };

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
      translateY.value = e.translationY
      rotate.value = translateX.value / 20;
    })
    .onEnd(() => {
      if (translateX.value > SWIPE_THRESHOLD) {
        translateX.value = withSpring(SCREEN_WIDTH + 100);
        cardOpacity.value = withSpring(0, {}, () => runOnJS(onSwipeRight)(user));
      } else if (translateX.value < -SWIPE_THRESHOLD) {
        translateX.value = withSpring(-SCREEN_WIDTH - 100);
        cardOpacity.value = withSpring(0, {}, () => runOnJS(onSwipeLeft)(user));
      } else {
        translateX.value = withSpring(0);
        rotate.value = withSpring(0);
      }
    });

  const tapGesture = Gesture.Tap().onEnd((e) => {
    if (e.x > SCREEN_WIDTH / 2) handleNext();
    else handlePrev();
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { rotate: `${rotate.value}deg` }],
    opacity: cardOpacity.value,
  }));

  return (
    <>
      <GestureDetector gesture={Gesture.Simultaneous(panGesture, tapGesture)}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <Image source={{ uri: user.photos[index] }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.name}>
              {user.name}, {user.age}{" "}
              <Text style={styles.viewMore} onPress={() => navigation.navigate('UserDetail', {user})}>
                Xem thêm
              </Text>
            </Text>
            <Text  style={styles.infoText}>{renderInfo()}</Text>
          </View>
        </Animated.View>
      </GestureDetector>
      <SwipeButtons
        onUndo={() => console.log("Quẹt lại")}
        onDislike={() => onSwipeLeft(user)}
        onSuperLike={() => console.log("Siêu thích")}
        onLike={() => onSwipeRight(user)}
        onMessage={() => console.log("Nhắn tin")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "80%",
    position: "absolute",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    alignSelf: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  infoText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },
  viewMore: {
    fontSize: 14,
    color: "#FFD700",
    alignSelf:"flex-end"
  },
});

export default UserCard;

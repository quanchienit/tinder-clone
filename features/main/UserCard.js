import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 120;

const UserCard = ({ user, onSwipeLeft, onSwipeRight }) => {
  const [index, setIndex] = useState(0);

  const translateX = useSharedValue(0);
  const rotate = useSharedValue(0);
  const cardOpacity = useSharedValue(1);

  const handleNext = () => {
    if (index < user.photos.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const renderInfo = () => {
    switch (index) {
      case 0:
        return <Text style={styles.infoText}>{user.distance} km</Text>;
      case 1:
        return <Text style={styles.infoText}>{user.bio}</Text>;
      case 2:
        return <Text style={styles.infoText}>{user.interests?.join(", ")}</Text>;
      default:
        return <Text style={styles.infoText}>{user.interests?.join(", ")}</Text>;
    }
  };

  // 👇 Gesture: PAN để swipe card
  const pan = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
      rotate.value = translateX.value / 20;
    })
    .onEnd(() => {
      if (translateX.value > SWIPE_THRESHOLD) {
        translateX.value = withSpring(SCREEN_WIDTH + 100);
        cardOpacity.value = withSpring(0, {}, () => {
          runOnJS(onSwipeRight)(user);
        });
      } else if (translateX.value < -SWIPE_THRESHOLD) {
        translateX.value = withSpring(-SCREEN_WIDTH - 100);
        cardOpacity.value = withSpring(0, {}, () => {
          runOnJS(onSwipeLeft)(user);
        });
      } else {
        translateX.value = withSpring(0);
        rotate.value = withSpring(0);
      }
    });

  // 👇 Gesture: TAP để chuyển ảnh
  const tap = Gesture.Tap()
    .onStart((e) => {
      const tapX = e.x;
      if (tapX > SCREEN_WIDTH / 2) {
        runOnJS(handleNext)();
      } else {
        runOnJS(handlePrev)();
      }
    });

  // 👉 Dùng Gesture.Race để đảm bảo không xung đột tap/pan
  const gesture = Gesture.Race(pan, tap);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { rotate: `${rotate.value}deg` },
    ],
    opacity: cardOpacity.value,
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Image source={{ uri: user.photos[index] }} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.name}>
            {user.name}, {user.age}
          </Text>
          {renderInfo()}
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 500,
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
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  infoText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 4,
  },
});

export default UserCard;

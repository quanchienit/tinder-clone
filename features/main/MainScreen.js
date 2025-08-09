import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import UserCard from "./UserCard";

const users= [
  {
    id: "1",
    name: "Anna",
    age: 24,
    distance: 5, // km
    bio: "Thích du lịch và cà phê ☕",
    interests: ["Du lịch", "Cà phê", "Chó mèo"],
    photos: [
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/women/45.jpg",
      "https://randomuser.me/api/portraits/women/46.jpg",
      "https://randomuser.me/api/portraits/women/47.jpg",
    ],
  },
  {
    id: "2",
    name: "Anna",
    age: 24,
    distance: 5, // km
    bio: "Thích du lịch và cà phê ☕",
    interests: ["Du lịch", "Cà phê", "Chó mèo"],
    photos: [
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/women/45.jpg",
      "https://randomuser.me/api/portraits/women/46.jpg",
      "https://randomuser.me/api/portraits/women/47.jpg",
    ],
  },
];

const MainScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [index, setIndex] = useState(0);

  const handleSwipeLeft = (user) => {
    console.log("❌ Disliked", user.name);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleSwipeRight = (user) => {
    console.log("❤️ Liked", user.name);
    setCurrentIndex((prev) => prev + 1);
  };
  const onSwipeUp = (user) => {
  console.log("Super Like:", user.name);
};
  const renderInfo = () => {
    switch (index) {
      case 0:
        return <Text style={styles.infoText}>{user.distance} km</Text>;
      case 1:
        return <Text style={styles.infoText}>{user.bio}</Text>;
      case 2:
        return (
          <Text style={styles.infoText}>{user.interests?.join(", ")}</Text>
        );
      default:
        return (
          <Text style={styles.infoText}>{user.interests?.join(", ")}</Text>
        );
    }
  };
  return (
    <View style={styles.container}>
      {users
        .slice(currentIndex)
        .reverse()  
        .map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default MainScreen;

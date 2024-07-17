import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: "Scan, Pay & Enjoy!",
    text: "Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!",
    image: require("./assets/Mask Group.png"),
    backgroundColor: "#fff"
  },
  {
    key: 2,
    title: "Track Your Orders",
    text: "Stay updated with real-time notifications and track your orders easily.",
    image: require("./assets/Mask Group.png"), // Add your own image
    backgroundColor: "#fff"
  },
  {
    key: 3,
    title: "Exclusive Discounts",
    text: "Get access to exclusive discounts and offers available only on our app.",
    image: require("./assets/Mask Group.png"), // Add your own image
    backgroundColor: "#fff"
  }
];

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textBox}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
      </View>
    );
  };

  const _onDone = () => {
    setShowRealApp(true);
  };

  const renderDoneButton = () => (
    <View style={styles.buttonCircle}>
      <Text style={styles.doneButtonText}>Done</Text>
    </View>
  );

  const renderNextButton = () => (
    <View style={styles.buttonCircle}>
      <Text style={styles.nextButtonText}>Next</Text>
    </View>
  );

  if (showRealApp) {
    return (
      <View style={styles.container}>
        <Text>This is real app!</Text>
      </View>
    );
  } else {
    return (
      <AppIntroSlider
        renderItem={ _renderItem }
        data={ slides }
        onDone={ _onDone }
        renderDoneButton={ renderDoneButton }
        renderNextButton={ renderNextButton }
        activeDotStyle={{ backgroundColor: "#000" }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  textBox: {
    alignContent: "center",
    width: 322,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginVertical: 20,
  },
});

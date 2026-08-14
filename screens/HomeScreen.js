import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles.js";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title2}>Welcome to The Daily Brew Café</Text>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.itemDescription}>The Daily Brew is a cozy café where you can enjoy freshly brewed coffee, delicious snacks, and a relaxing atmosphere. Our goal is to provide quality food and drinks at affordable prices while making every visit enjoyable.</Text>
      
      <Text style={styles.title}>{"\n"}What we offer</Text>
            
              <Text>☕ Freshly brewed coffee</Text>
              <Text>🥤 Hot and cold beverages</Text>
              <Text>🥪 Sandwiches and light meals</Text>
              <Text>🍰 Cakes and desserts</Text>
            
    </View>
  );
}

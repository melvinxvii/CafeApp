import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Our Mission</Text>
      
        <Text style={styles.itemDescription}>To serve great coffee, delicious food, and create a welcoming placefor everyone.</Text>
      
      <Text style={styles.title}>📍 Visit Us</Text>
     
        <Text>The Daily Brew Café</Text>
        <Text>Colombo, Sri Lanka</Text>
        <Text>Opening Hours:</Text>
        <Text>Monday - Sunday: 9:00 AM - 7:00 PM</Text>
      
      <Text style={styles.title}>📞 Contact Us</Text>
      
        <Text>Tel : +94112345678</Text>
        <Text>Email: dailybrew@gmail.com</Text>
           
    </View>
  );
}

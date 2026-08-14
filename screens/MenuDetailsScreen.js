import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function MenuDetailsScreen({ route, navigation }) {
  const { name, description, price } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Details</Text>

      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemDescription}>{description}</Text>
      <Text style={styles.itemPrice}>{price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
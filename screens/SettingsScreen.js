import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text>Application Settings</Text>
    </View>
  );
}

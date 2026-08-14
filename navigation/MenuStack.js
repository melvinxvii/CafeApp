import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuDetailsScreen from "../screens/MenuDetailsScreen";
import MenuScreen from "../screens/MenuScreen";

const Stack = createNativeStackNavigator();

export default function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ title: "Menu" }}
      />

      <Stack.Screen
        name="MenuDetails"
        component={MenuDetailsScreen}
        options={{ title: "Item Details" }}
      />
    </Stack.Navigator>
  );
}

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabs from "./MainTabs";
import AboutScreen from "../screens/AboutScreen";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainApp"
        component={MainTabs}
        options={{
          title: "The Daily Brew Café",
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="About"
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
}

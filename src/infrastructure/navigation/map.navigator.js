import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

// SCREEN
import { MapScreen } from "../../features/map/screens/map.screen";

// pada screen ini, navigation container tidak dibutuhkan
// karena restaurantstack merupakan sub dari appnavigator
const Map = createStackNavigator();

export const MapNavigator = () => {
  return (
    <Map.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Map.Screen name="Map" component={MapScreen} />
    </Map.Navigator>
  );
};

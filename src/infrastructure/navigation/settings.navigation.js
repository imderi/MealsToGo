import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

// SCREEN
import { SettingsScreen } from "../../features/settings-screen/screens/settings.screen";

// pada screen ini, navigation container tidak dibutuhkan
// karena restaurantstack merupakan sub dari appnavigator
const SettingsNavigation = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsNavigation.Navigator>
      <SettingsNavigation.Screen name="Settings" component={SettingsScreen} />
    </SettingsNavigation.Navigator>
  );
};

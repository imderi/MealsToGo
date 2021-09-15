import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// SCREEN
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

// pada screen ini, navigation container tidak dibutuhkan
// karena restaurantstack merupakan sub dari appnavigator
const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

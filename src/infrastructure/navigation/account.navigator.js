import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { Account } from "../../features/account/screen/account.screen";
import { Login } from "../../features/account/screen/login.screen";
import { Register } from "../../features/account/screen/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={Account}
      />
      <Stack.Screen
        options={{ headerTransparent: true, headerBackTitleVisible: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerTransparent: true, headerBackTitleVisible: false }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};

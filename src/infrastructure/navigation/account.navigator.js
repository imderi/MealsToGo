import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { Account } from "../../features/account/screen/account.screen";
import { Login } from "../../features/account/screen/login.screen";
import { Register } from "../../features/account/screen/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Account} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

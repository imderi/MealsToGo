import React, { useContext } from "react";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <View>
      <Text>Hola Amigo</Text>
      <Button onPress={() => onLogout()}>Logout</Button>
    </View>
  );
};

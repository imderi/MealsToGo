import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// OTHERS NAVIGATOR
import { RestaurantNavigator } from "./restaurants.navigation";
import { MapNavigator } from "./map.navigation";

// NAVIGATION - TAB
const Tab = createBottomTabNavigator();

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settings Here</Text>
    </SafeArea>
  );
};

// up is ex

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Restaurant") {
              iconName = focused ? "restaurant" : "restaurant-outline";
            } else if (route.name === "Maps") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
        <Tab.Screen name="Maps" component={MapNavigator} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

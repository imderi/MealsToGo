import React from "react";
import { Ionicons } from "@expo/vector-icons";

// NAVIGATION
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// OTHERS NAVIGATOR
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapNavigator } from "./map.navigator";
import { SettingsNavigator } from "./settings.navigator";

//context provider di app level
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";

// NAVIGATION - TAB
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Restaurant") {
                  iconName = focused ? "restaurant" : "restaurant-outline";
                } else if (route.name === "Maps") {
                  iconName = focused ? "map" : "map-outline";
                } else if (route.name === "Settings Navigator") {
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
            <Tab.Screen
              name="Settings Navigator"
              options={{ title: "Settings" }}
              component={SettingsNavigator}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};

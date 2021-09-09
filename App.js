import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation/";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFJ9di4BUCbQjitRC-da8VSWeiI8KimW8",
  authDomain: "mealstogo-f3ecb.firebaseapp.com",
  projectId: "mealstogo-f3ecb",
  storageBucket: "mealstogo-f3ecb.appspot.com",
  messagingSenderId: "620866849228",
  appId: "1:620866849228:web:84621bf730ab2584633569",
  measurementId: "G-ZMK0CGGPX6",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}
//\\ firebase

export default function App() {
  // fonts
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

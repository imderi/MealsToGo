import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsScreen } from "./src/features/restaurants/restaurants/restaurants.screen";
// JIKA STATUSBAR DI ANDROID FULL
// Bisa menggunakan package StatusBar untuk menentukan tinggi status bar, ("hanya untuk android")

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}

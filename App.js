import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";

// JIKA STATUSBAR DI ANDROID FULL
// Bisa menggunakan package StatusBar untuk menentukan tinggi status bar, ("hanya untuk android")

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});

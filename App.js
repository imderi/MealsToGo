import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
// JIKA STATUSBAR DI ANDROID FULL
// Bisa menggunakan package StatusBar untuk menentukan tinggi status bar, ("hanya untuk android")

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: { padding: 16, backgroundColor: "green" },
  list: { flex: 1, padding: 16, backgroundColor: "blue" },
});

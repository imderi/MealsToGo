import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

// JIKA STATUSBAR DI ANDROID FULL
// Bisa menggunakan package StatusBar untuk menentukan tinggi status bar, ("hanya untuk android")
// /* StatusBar current height hanya berjalan di android, jadi harus diberi kondisi agar tidak error di ios */
// untuk di vanila react native pakai library statusbar bawaaan ya
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

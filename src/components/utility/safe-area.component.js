import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

// JIKA STATUSBAR DI ANDROID FULL
// Bisa menggunakan package StatusBar untuk menentukan tinggi status bar, ("hanya untuk android")
// /* StatusBar current height hanya berjalan di android, jadi harus diberi kondisi agar tidak error di ios */
// untuk di vanila react native pakai library statusbar bawaaan ya
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

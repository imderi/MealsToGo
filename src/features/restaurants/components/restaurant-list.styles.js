import styled from "styled-components";
import { FlatList } from "react-native";

// attrs disini adalah function untuk mention setiap arrtibutes dari setiap elemen dom yang sama
// singkatnya untuk memberikan akses untuk memberikan props pada default flatlist
export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

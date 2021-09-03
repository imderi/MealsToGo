import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

// arrts disini adalah function untuk mention setiap arrtibutes dari setiap elemen dom yang sama
// singkatnya untuk memberikan akses untuk memberikan props pada default flatlist
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
// ini sendiri
// const RestaurantList = styled.FlatList`
//   padding: 16px;
// `;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantContext);

  console.log("ini context ==>>>  ", restaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        // ini data dari konteks
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </SafeArea>
  );
};

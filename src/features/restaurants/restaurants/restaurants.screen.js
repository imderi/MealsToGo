import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  /* background-color: ${(props) => props.theme.colors.bg.primary}; */
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
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
  // use context
  const { isLoading, restaurants, error } = useContext(RestaurantContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <LoadingIndicator
            size={50}
            animating={true}
            colors={Colors.blue300}
          />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        // ini data dari konteks
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </SafeArea>
  );
};

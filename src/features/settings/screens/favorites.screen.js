import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const NoFavoritesContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  if (!favorites.length) {
    return (
      <NoFavoritesContainer>
        <Text>No Favorites</Text>
      </NoFavoritesContainer>
    );
  }

  return (
    <SafeArea>
      <RestaurantList
        // ini data dari konteks
        data={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </SafeArea>
  );
};

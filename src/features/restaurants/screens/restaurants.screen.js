import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantList } from "../components/restaurant-list.styles";

import { FadeInView } from "../../../components/animations/fade.animation";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

// ini sendiri
// const RestaurantList = styled.FlatList`
//   padding: 16px;
// `;

export const RestaurantsScreen = ({ navigation }) => {
  // use context
  const { isLoading, restaurants } = useContext(RestaurantContext);
  const { favorites } = useContext(FavoritesContext);

  const [isToggled, setIsToggled] = useState(false);

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

      <Search
        isFavoriteToggled={isToggled}
        onFavoriteToggled={() => setIsToggled(!isToggled)}
      />

      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}

      <RestaurantList
        // ini data dari konteks
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </SafeArea>
  );
};

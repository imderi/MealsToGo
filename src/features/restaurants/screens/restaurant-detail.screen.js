import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const CloseButtonWrapper = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background-color: rgba(80, 80, 80, 0.7);
  border-radius: ${45 / 2}px;
  margin: 10px;
  position: absolute;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

const CloseButton = ({ onPress }) => {
  return (
    <CloseButtonWrapper onPress={onPress}>
      <Ionicons name="close" size={32} color="white" />
    </CloseButtonWrapper>
  );
};

export const RestaurantDetail = ({ route, navigation: { goBack } }) => {
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <CloseButton onPress={() => goBack()} />

      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="First Item" />
            <List.Item title="Second Item" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="First Item" />
            <List.Item title="Second Item" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="First Item" />
            <List.Item title="Second Item" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="coffee" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="First Item" />
            <List.Item title="Second Item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};

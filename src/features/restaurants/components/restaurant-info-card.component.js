import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Card } from "react-native-paper";

// tanda quotes disini (secara konteks) `` adalah template string
// styled component ini untuk styling komnponen bawaan react-native
const Title = styled.Text`
  margin: 16px;
  color: red;
`;

// sedangkan yang ini kalo mau component custom (bisa juga untuk komponen bawaan)
const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://media.istockphoto.com/photos/fiesta-mexicana-mexican-fiesta-outdoors-tortilla-chips-beef-with-picture-id1227595910",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

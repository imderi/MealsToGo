import styled from "styled-components/native";
import { Card } from "react-native-paper";

// tanda quotes disini (secara konteks) `` adalah template string
// styled component ini untuk styling komnponen bawaan react-native
// props didalam styled component adl dari theme provider, sedangkan colors nya dari dir infrastructure

// sedangkan yang ini kalo mau component custom (bisa juga untuk komponen bawaan)
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Rating = styled.View`
  flex-direction: row;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

// GAK DIKASIH STYLING
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

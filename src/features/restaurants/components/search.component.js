import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  /* background-color: ${(props) => props.theme.colors.bg.primary}; */
`;

export const Search = ({ isFavoriteToggled, onFavoriteToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavoriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoriteToggled}
        placeholder="Search for a location"
        value={searchKeyword}
        // Akan mentrigger search function saat submit editing
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        // saat ada perubahan didalam searchbar
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

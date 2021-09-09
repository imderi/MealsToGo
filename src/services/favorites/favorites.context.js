import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // LOCAL STORAGE
  const saveFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log("error storing = ", e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error storing = ", e);
    }
  };
  //\\ LOCAL STORAGE

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavorites(newFavorites);
  };

  //local storage
  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    //function localstorage
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

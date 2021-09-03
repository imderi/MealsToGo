import React, { useState, createContext, useEffect, useMemo } from "react";

// function dari service
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

// membuat global context
export const RestaurantContext = createContext();

// sebagai wrapping (provider) app agar bisa provide state
export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider value={{ restaurants: [1, 2, 3, 4] }}>
      {children}
    </RestaurantContext.Provider>
  );
};

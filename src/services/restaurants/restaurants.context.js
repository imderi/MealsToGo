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
  const [restaurants, setRestaurants] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};

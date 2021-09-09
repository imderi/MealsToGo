import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  // ismap == true hanya untuk menandai bahwa saat compactrestaurantinfo ini digunakan
  // komponen ini digunakan didalam mapview dan bukan di view biasa
  // sehingga di compactrestaurantinfo bisa menggunakan jenis komponen untuk merender komponen yang berbeda
  return <CompactRestaurantInfo isMap={true} restaurant={restaurant} />;
};

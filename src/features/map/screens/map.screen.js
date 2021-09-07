import React, { useContext, useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import MapView from "react-native-maps";

export const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      />
    </View>
  );
};

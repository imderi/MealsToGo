import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        type={type}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 15,
            marginBottom: 15,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text> Putar Camera</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

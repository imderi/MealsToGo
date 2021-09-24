import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const SnapButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: ${60 / 2}px;
  background-color: white;
  margin: 25px;
  align-items: center;
  justify-content: center;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const onSnap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      ratio={"16:9"}
    >
      <SnapButton onPress={() => onSnap()}>
        <Text>Snap!</Text>
      </SnapButton>
    </ProfileCamera>
  );
};

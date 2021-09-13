import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import bgimage from "../../../../assets/bg.jpeg";

export const AccountBackground = styled.ImageBackground.attrs({
  source: bgimage,
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  margin: ${(props) => props.theme.space[3]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  margin-bottom: ${(props) => props.theme.space[2]}; ;
`;

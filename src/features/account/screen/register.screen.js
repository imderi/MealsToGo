import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const Register = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          type="outlined"
          value={email}
          textContentType="emailAddress"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(p) => setPassword(p)}
        />
        <AuthInput
          label="Re-type Password"
          value={repeatedPassword}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(rp) => setRepeatedPassword(rp)}
        />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <AuthButton
          disabled={isLoading}
          loading={isLoading}
          icon="email"
          mode="contained"
          onPress={() => onRegister(email, password, repeatedPassword)}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

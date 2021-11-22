import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { translate } from "../../locales";

const LoginForm = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onLogin = () => {
    props.doLogin(email, password);
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Text>{translate('password')}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <Button
        onPress={onLogin}
        title="Entrar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'aquamarine',
    width: 200,
    margin: 10,
  },
});

export default LoginForm;
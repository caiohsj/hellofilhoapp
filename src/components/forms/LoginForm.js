import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { translate } from "../../locales";

const LoginForm = (props) => {
  const [cpf, setCPF] = useState(null);
  const [password, setPassword] = useState(null);

  const onLogin = () => {
    props.doLogin(cpf, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setCPF}
        value={cpf}
        placeholder={translate('components.login_form.cpf')}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder={translate('components.login_form.password')}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={onLogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{translate('components.login_form.button')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    backgroundColor: '#fff',
    borderColor: '#5da7e9',
    width: 200,
    margin: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#0169d9',
    width: 200,
    height: 32,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default LoginForm;
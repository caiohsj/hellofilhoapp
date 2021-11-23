import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import { connect } from 'react-redux';
import Auth from '../services/auth';

const Login = (props) => {
  const signIN = (cpf, password) => {
    Auth.login({ cpf, password }).then(res => {
      props.dispatch({
        type: 'SET_CURRENT_USER',
        payload: res.data,
      });
    });
  };

  useEffect(() => {
    if (props.currentUser) {
      props.navigation.navigate('Home');
    }
  }, [props.currentUser]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/logo.png')}
      />
      <LoginForm doLogin={signIN}/>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    schoolIds: auth.school_ids,
    currentUser: auth.user,
  };
};

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5da7e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  }
});
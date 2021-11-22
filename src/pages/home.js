import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import { connect } from 'react-redux';
import Auth from '../services/auth';

const Home = (props) => {
  const signIN = (email, password) => {
    Auth.login({ email, password }).then(res => {
      props.dispatch({
        type: 'SET_CURRENT_USER',
        payload: res.data,
      });
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginForm doLogin={signIN}/>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { currentUser } = state;
  return { currentUser };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
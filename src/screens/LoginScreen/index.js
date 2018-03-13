// @flow

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import LoginForm from '../../components/LoginForm';
import config from '../../modules/config';


class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: config.color.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  render() {
    return (
      <ScrollView>
        <LoginForm/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});

export default LoginScreen;
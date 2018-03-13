// @flow

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View
} from 'react-native';

import Separator from '../Separator';
import Button from '../Button';
import theme from '../../modules/theme'
import config from '../../modules/config'


type PropsType = {
  text?: string,
  color?: string,
  onPress?: Function,
};

type state = {
  text: string
}

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: []
    }
  }

  render() {

    handleSubmitPress = () => {

      const username = this.state.username;
      const password = this.state.password;

      fetch('http://admin.pierredelmer.com/test.php', {
        method: 'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
          username: username,
          password: password
        })
      })
      .then((response) => response.json())
        .then((responseJson) => {
          alert(responseJson);
        })
        .catch((error) => {
          console.log(error);
          this.setState({errors: error});
      });
    }

    return (
      <View style={{ margin: theme.margin }}>
        <TextInput
          style={styles.form}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          placeholder={'Username'}
        />
        <Separator/>
        <TextInput
          style={styles.form}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder={'Password'}
        />
        <Button
          text={'Se connecter'}
          color={config.color.secondary}
          onPress={handleSubmitPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: config.color.tertiary,
    height: 40,
    padding: 10,
    borderRadius: theme.radius,
  },
});

export default LoginForm;

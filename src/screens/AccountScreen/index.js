// @flow

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Box from '../../components/Box';
import Button from '../../components/Button'
import config from '../../modules/config';
import theme from '../../modules/theme';
import Separator from '../../components/Separator'



class AccountScreen extends React.Component {

  static navigationOptions = {
    title: 'Account',
    headerStyle: {
      backgroundColor: config.color.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {

    handleLoginPress = () => {
      this.props.navigation.navigate('Login');
    }

    handleRegisterPress = () => {
      this.props.navigation.navigate('Register');
    }


    return (
      <ScrollView>
        <View style={styles.container}>
          <Box style={styles.box} color={config.color.tertiary}>
            <Text style={styles.text}>Déjà client ?</Text>
            <View style={styles.flexButton}>
              <Button
                text={'Se connecter'}
                color={config.color.secondary}
                onPress={handleLoginPress}
              />
            </View>
            <Text style={styles.register} onPress={handleRegisterPress}>Pas encore inscrit ?</Text>
          </Box>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.marginL
  },
  box: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.margin
  },
  text: {
    color: config.color.primary,
    fontSize: 16,
    fontWeight: 'bold',
    margin: theme.margin,
  },
  flexButton: {
    flex: 1,
    flexDirection: 'row',
  },
  register: {
    paddingTop: theme.marginL,
    color: 'blue'
  }
});

export default AccountScreen;
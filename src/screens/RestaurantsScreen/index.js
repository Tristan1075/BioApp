// @flow

import React from 'react';
import { View, Text } from 'react-native';


class RestaurantsScreen extends React.Component {

  static navigationOptions = {
    title: 'Restaurants',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Restaurants Screen</Text>
      </View>
    );
  }
}

export default RestaurantsScreen;
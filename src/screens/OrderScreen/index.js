// @flow

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Box from '../../components/Box';
import BoxProducts from '../../components/BoxProducts';
import CartScreen from '../../screens/CartScreen';
import config from '../../modules/config';
import theme from '../../modules/theme';
import AddCart from '../../components/AddCart'



class OrderScreen extends React.Component {

  static navigationOptions = {
    title: 'Order',
    headerStyle: {
      backgroundColor: config.color.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  render() {

    const Menu = [
      'Pâtes',
      'Pizza',
      'Sandwich',
      'Burger',
    ]


    const MenuList = Menu.map(function(Menu){

      console.log(Menu)
      return(
        <Box color={config.color.tertiary} style={styles.box}>
          <BoxProducts
            source={config.files.bruschetta}
            text={Menu}
            color={config.color.secondary}
          />
        </Box>
      );
    })

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.view}>
            { MenuList }
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    margin: theme.margin
  },
  box: {
    justifyContent: 'center'
  }
});

export default OrderScreen;
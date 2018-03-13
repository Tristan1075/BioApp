// @flow

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Carousel from 'react-native-carousel-view';

import Button from '../../components/Button/';
import Box from '../../components/Box'

import theme from '../../modules/theme';
import config from '../../modules/config';
import icons from '../../modules/icons';


class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
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
        <View style={styles.container}>
          <Carousel
            delay={2000}
            indicatorAtBottom
            indicatorSize={15}
            indicatorText="○"
            indicatorColor={config.color.secondary}
          >
            <View style={styles.contentContainer}>
              <Image source={config.files.homescreenHeader} style={styles.carrousselHomeScreen}/>
            </View>
            <View style={styles.contentContainer}>
              <Text>Page </Text>
            </View>
            <View style={styles.contentContainer}>
              <Text>Page</Text>
            </View>
          </Carousel>
          <Box style={styles.box} color={config.color.tertiary}>
            <Button
              text={"M'y rendre"}
              color={config.color.primary}
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button
              text={"Passer une commande"}
              color={config.color.secondary}
              onPress={() => this.props.navigation.navigate('Details')}
            />
          </Box>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Account')}>
            <Box color={config.color.primary}>
              <View style={styles.view}>
              <Text>Image</Text>
              </View>
              <View>
                <Text style={[styles.text, styles.title, {color: config.color.secondary}]}>Mon compte</Text>
                <Text style={[styles.text, {color: config.color.tertiary}]}>Inscrivez-vous pour pouvoir profiter d'avantages</Text>
              </View>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Order')}>
            <Box color={config.color.tertiary}>
              <View style={styles.view}>
                <Text>Image</Text>
              </View>
              <View>
                <Text style={[styles.text, styles.title, {color: config.color.primary}]}>Nos produits</Text>
                <Text style={[styles.text, {color: config.color.darkgray}]}>Découvrez tous nos menus, sandwiches, salades, desserts...</Text>
              </View>
            </Box>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carrousselHomeScreen: {
    alignSelf: 'stretch',
    height: 200
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.margin,
  },
  box: {
    justifyContent: 'center',
  },
  title: {
    color: config.color.secondary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    padding: theme.margin,
    marginLeft: theme.margin,
    marginRight: theme.margin,
    color: 'white',

    borderRadius: theme.radius,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: theme.radius,
    shadowOpacity: 0.1,
  }
});

export default HomeScreen;
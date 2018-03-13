// @flow

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';

import theme from '../../modules/theme'
import Button from '../Button'


type PropsType = {
  text?: string,
  color?: string,
  source?: string,
  onPress?: Function,
};

const BoxProducts = (props: PropsType) => {

  const { text, color, source, onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={source} style={{width: 145, height: 100, overflow: 'visible',}}/>
      </View>
      <Text style={styles.text}>{text}</Text>
      <Button
        text={'Choisir'}
        color={color}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 145,
    height: 100,
    overflow: 'scroll',
  },
  text: {
    padding: theme.margin,
    fontWeight: 'bold'
  }

});

export default BoxProducts;

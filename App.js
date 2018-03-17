/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StatusBar,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Row from './src/Row.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View 
          style = {{
            alignItems   : 'center',
            shadowOpacity: 0.3,
            shadowRadius : 5,
            shadowColor  : 'black',
            shadowOffset : { height: 10, width: 0 },
            zIndex       : 1,
          }}
        >
        <Image
          source={require('./images/Banner.png')}
          style  = {{
            height: 70,
            resizeMode: 'contain',
          }}
        />
        </View>
        <ScrollView
          style={styles.scrollView}
        >
          <Row zIndex={100} />
          <Row zIndex={100} />
          <Row zIndex={100} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  scrollView: {
    backgroundColor: '#4A637D',
    flex: 1,
    padding: 10,
  },
});

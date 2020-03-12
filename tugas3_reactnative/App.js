/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';
import Barang from  "./Component/Barang";
import Header from "./Component/Header";

export default class App extends Component<Props>{
  render(){
    return(
      <View style={{flex:1}}>
        <Header />
        <Barang data="SELAMAT DATANG"/>

      </View>
      );
  }
}

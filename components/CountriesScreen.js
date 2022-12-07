import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VideoIframes from './VideoIframes';

export default function CountriesScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.Img} source={require('../assets/LightMap.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Upper: {},
    Bottom:{
      
    }
  });
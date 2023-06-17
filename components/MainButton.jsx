import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';



export default function MainButton(props) {
  const { onPress, title = 'Save', style = {} } = props;
  const [fontsLoaded] = useFonts({
    'AbhayaLibre': require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    'QwitcherGrypen': require('../assets/fonts/QwitcherGrypen-Bold.ttf'),
  });

  return (
    
      <TouchableOpacity style={{...styles.button, ...style}} activeOpacity={0.4} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    width: "90%",
    backgroundColor: "#ffffff3c",
  },
  text: {
    fontSize: 30,
    letterSpacing: 0.35,
    color: 'white',
    fontFamily: 'AbhayaLibre'
  },
});





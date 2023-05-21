import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';



export default function Button(props) {
  const { onPress, title = 'Save', style = {} } = props;
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
    height: 45,
    width: "90%",
    backgroundColor: "#ffffff3c",
    margin: 10
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});





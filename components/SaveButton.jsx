import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const SaveButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.btnStyles}>
        <Text style={styles.btnTextStyle}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyles: {
    marginTop: 50,
    borderWidth: 6,
    borderColor: '#906828',
    backgroundColor: 'white',
    padding: 10,
  },
  btnTextStyle: {
      letterSpacing: 2,
    textAlign: 'center',
    color: '#906828',
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
});

export default SaveButton;

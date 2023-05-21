import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

const LocationParamBtn = ({ onPress }) => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    AbhayaLibreReg: require('../assets/fonts/AbhayaLibre-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.btnPosition}>
      <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
        <Text style={styles.btnText}>Location</Text>
        <Text style={styles.iconStyle}>V</Text>
        {/* <AntDesign name="down" size={24} color="white" style={styles.iconStyle}/> */}
      </TouchableOpacity>
    </View>
  );
};

export default LocationParamBtn;

const styles = StyleSheet.create({
  btnPosition: {
    marginTop: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    width: '87%',
    backgroundColor: 'rgba(196, 157, 98, 0.85);',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AbhayaLibre',
    letterSpacing: 2,
  },
  iconStyle: {
    position: 'absolute',
    right: 15,
    color: 'white',
    fontSize: 17,
  },
});

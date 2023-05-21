import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import backIcon from '../assets/images/goBackIcon.png';
import hamburgerIcon from '../assets/images/hamburgerIconSumm.png';

const SummaryHeader = ({ onPress, onPressDrawer, title }) => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.pageHeaderContainer}>
      <View style={styles.pageHeader}>
        <TouchableOpacity onPress={onPress}>
          <Image source={backIcon} />
        </TouchableOpacity>
        <View>
          <Text style={styles.pageHeaderText}>{title}</Text>
        </View>
        <TouchableOpacity onPress={onPressDrawer}>
          <Image source={hamburgerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SummaryHeader;

const styles = StyleSheet.create({
  pageHeaderContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageHeader: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageHeaderText: {
    color: '#C49D62',
    letterSpacing: 2,
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
});

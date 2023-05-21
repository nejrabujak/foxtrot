import bgPhoto from '../assets/images/WEDDING21.jpg';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import SummaryHeader from '../components/SummaryHeader';
import { useFonts } from 'expo-font';

const ItemAdded = () => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={bgPhoto} style={styles.pageContainer}>
      <SummaryHeader title={''} style={{ flex: 1 }} />
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>ITEM ADDED SUCCESSFULLY!</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    resizeMode: 'cover',
    flex: 1,
  },
  circleContainer: {
    flex: 4,
    alignItems: 'center',
  },
  circle: {
    width: 190,
    height: 190,
    borderRadius: 190 / 2,
    backgroundColor: 'rgba(196, 157, 98, 0.59)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontFamily: 'AbhayaLibre',
    fontSize: 23,
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default ItemAdded;

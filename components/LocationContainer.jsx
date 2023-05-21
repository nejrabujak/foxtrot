import { useFonts } from 'expo-font';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LocationContainer = ({
  title,
  address,
  hoursOpened,
  hoursClosed,
  workHoursTime,
  phoneNumber,
  image,
}) => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const isOpen = (hoursOpened, hoursClosed) => {
    let currentTime = new Date().getHours();
    if (currentTime >= hoursOpened && currentTime < hoursClosed) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={styles.locations}>
      <View style={styles.locationContainer}>
        <Image source={image} />

        <View style={styles.rightSideLocationsStyles}>
          <View style={styles.headerTextStylesContainer}>
            <Text style={styles.headerTextStyles}>{title}</Text>
          </View>
          <View>
            <View style={styles.addressContainer}>
              <Ionicons name="location-outline" size={20} color="black" />

              <Text style={styles.textStyles}>{address}</Text>
            </View>
            <View style={styles.addressContainer}>
              <Icon name="progress-clock" size={20} color="black" />
              <Text
                style={
                  isOpen(hoursOpened, hoursClosed)
                    ? styles.greenLetters
                    : styles.redLetters
                }
              >
                {isOpen(hoursOpened, hoursClosed) ? 'Open' : 'Closed'}
              </Text>
              <Text style={styles.textStyles}>{workHoursTime}</Text>
            </View>
            <View style={styles.addressContainer}>
              <Icon name="phone-outline" size={20} color="black" />
              <Text style={styles.textStyles}>{phoneNumber}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LocationContainer;

const styles = StyleSheet.create({
  locations: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    width: '92%',
    height: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(196, 157, 98, 0.59)',
  },
  headerTextStylesContainer: {
    width: '100%',
  },
  headerTextStyles: {
    color: 'white',
    fontFamily: 'AbhayaLibre',
    fontSize: 15,
    letterSpacing: 2,
  },
  addressContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 5,
    alignItems: 'center',
  },
  textStyles: {
    color: 'white',
    fontFamily: 'AbhayaLibre',
    fontSize: 10,
    marginLeft: 10,
    letterSpacing: 1.3,
  },
  greenLetters: {
    color: 'rgba(98, 181, 90, 1)',
    fontFamily: 'AbhayaLibre',
    fontSize: 10,
    marginLeft: 10,
    letterSpacing: 1.3,
  },
  redLetters: {
    color: '#b55a5a',
    fontFamily: 'AbhayaLibre',
    fontSize: 10,
    marginLeft: 10,
    letterSpacing: 1.3,
  },
  rightSideLocationsStyles: {
    width: '65%',
  },
});

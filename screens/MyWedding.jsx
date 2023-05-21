import { StyleSheet, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

import LocationContainer from '../components/LocationContainer';
import SummaryHeader from '../components/SummaryHeader';

SplashScreen.preventAutoHideAsync();

export default function MyWedding({ navigation }) {
  const location = {
    locationOne: {
      title: 'Salon vjenčanica i svečanih haljina',
      address: 'Otoka, Džemala Bijedića 25/E Sarajevo',
      openingHour: 8,
      closingHour: 20,
      workHoursTime: ' closes 8pm',
      phoneNumber: '061 143 950',
      image: require('../assets/images/salon1.jpg'),
    },
    locationTwo: {
      title: 'Atelier Sposa',
      address: 'Azize Šaćirbegović 80c',
      openingHour: 11,
      closingHour: 17,
      workHoursTime: ' closes 5pm',
      phoneNumber: '060 30 30 388',
      image: require('../assets/images/salon2.jpg'),
    },
  };

  const locations = [location.locationOne, location.locationTwo];

  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    QwitcherGrypen: require('../assets/fonts/QwitcherGrypen-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.pageContainer} onLayout={onLayoutRootView}>
      <SummaryHeader
        title={'My wedding'}
        onPress={handlePress}
        onPressDrawer={() => navigation.openDrawer()}
      />
      <View style={styles.mainBody}>
        {locations.map((location, index) => (
          <TouchableOpacity key={index} style={{ width: '100%' }}>
            <LocationContainer
              title={location.title}
              address={location.address}
              hoursOpened={location.openingHour}
              hoursClosed={location.closingHour}
              workHoursTime={location.workHoursTime}
              phoneNumber={location.phoneNumber}
              image={location.image}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    flex: 4,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

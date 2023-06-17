import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useCallback, useContext } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import LocationContainer from '../components/LocationContainer';
import SummaryHeader from '../components/SummaryHeader';
import { CategoryContext } from './CategoryContext';
import { UserContext } from './UserContext';

SplashScreen.preventAutoHideAsync();

export default function MyWedding({ navigation }) {
  // const categories = [
  //   {
  //     category: 'Dresses',
  //     title: 'Salon vjenčanica i svečanih haljina',
  //     address: 'Otoka, Džemala Bijedića 25/E Sarajevo',
  //     openingHour: 8,
  //     closingHour: 20,
  //     workHoursTime: ' closes 8pm',
  //     phoneNumber: '061 143 950',
  //     image: require('../assets/images/salon1.jpg'),
  //   },
  //   {
  //     category: 'Venues',

  //     title: 'Restaurant Tavola',
  //     address: 'Maršala Tita 50',
  //     openingHour: 8,
  //     closingHour: 23,
  //     workHoursTime: ' closes 11pm',
  //     phoneNumber: '033 222 207',
  //     image: require('../assets/images/venues1.jpg'),
  //   },
  // ];

  const { categories } = useContext(CategoryContext);
  const { userInfo } = useContext(UserContext);

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

  const filteredCategories = categories.filter(
    (category) => category.userIdSelected === userInfo.username
  );

  return (
    <View style={styles.pageContainer} onLayout={onLayoutRootView}>
      <SummaryHeader
        title={'My wedding'}
        onPress={handlePress}
        onPressDrawer={() => navigation.openDrawer()}
      />
      <View style={styles.mainBody}>
        <ScrollView style={styles.scrollStyle}>
          {filteredCategories.map((category) => (
            <View style={styles.choices} key={category.category}>
              <View style={styles.mBCategories}>
                <Text style={styles.mBCategoriesTxt}>{category.category}</Text>
              </View>
              <TouchableOpacity style={{ width: '100%' }}>
                <LocationContainer
                  title={category.companyName}
                  address={category.location}
                  hoursOpened={8}
                  hoursClosed={17}
                  workHoursTime={category.workHoursTime}
                  phoneNumber={category.phoneNumber}
                  image={category.image}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
  scrollStyle: {
    width: '100%',
  },
  choices: {
    width: '98%',
    marginBottom: 35,
  },
  mBCategories: {
    width: '90%',
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  mBCategoriesTxt: {
    color: '#C49D62',
    letterSpacing: 4,
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
});

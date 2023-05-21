import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import CategoryButton from '../components/CategoryButton';
import SummaryHeader from '../components/SummaryHeader';

const Summary = ( {navigation} ) => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = () => {
    navigation.navigate('Home')
  };

  return (
    <View style={styles.pageContainer}>
      <SummaryHeader onPress={handlePress} title={'SUMMARY'} onPressDrawer={() => navigation.openDrawer()}/>
      <View style={styles.mainBody}>
        <View style={styles.mBCategories}>
          <Text style={styles.mBCategoriesTxt}>CATEGORIES</Text>
        </View>

        <ScrollView style={styles.scrollStyle}>
          <CategoryButton title={'Dresses'} onPress={() => navigation.navigate('Dresses')}/>
          <CategoryButton title={'Suits'} onPress={() => navigation.navigate('Suits')} />
          <CategoryButton title={'Venues'} onPress={() => navigation.navigate('Venues')} />
          <CategoryButton title={'Photo / Video'} onPress={() => navigation.navigate('PhotoVideo')} />
          <CategoryButton title={'Music'} onPress={() => navigation.navigate('Music')} />
          <CategoryButton title={'Catering'} onPress={() => navigation.navigate('Catering')} />
          <CategoryButton title={'Decoration'} onPress={() => navigation.navigate('Decoration')} />
          <CategoryButton title={'Invitations'} onPress={() => navigation.navigate('Invitations')} />
          <CategoryButton title={'Cake'} onPress={() => navigation.navigate('Cake')} />
          <CategoryButton title={'Car rental'} onPress={() => navigation.navigate('CarRental')} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    flex: 4,
    width: '100%',
  },
  scrollStyle: {
    marginTop: 20,
    marginBottom: 30,
  },
  mBCategories: {
    width: '90%',
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  mBCategoriesTxt: {
    color: '#C49D62',
    letterSpacing: 2,
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
});

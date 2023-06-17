import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const AdminHeaderMain = ({ onPress, title }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  }

  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.pageHeaderContainer}>
      <View style={styles.pageHeader}>
      <Text style={styles.pageHeaderText}>{title}</Text>
      <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>
                  Log out
                </Text>
              </TouchableOpacity>
        <View>

        </View>
      </View>
    </View>
  );
};

export default AdminHeaderMain;

const styles = StyleSheet.create({
  pageHeaderContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageHeader: {
    width: '87%',
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
  logoutButtonText: {
    color: '#C49D62',
    letterSpacing: 2,
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
    marginLeft: 130,
  },

});

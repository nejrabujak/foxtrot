import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import backIcon from '../assets/images/goBackIcon.png';

const AdminHeader = ({ onPress, title }) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    const logoutResponse = await logout(navigation);
    if (logoutResponse.success) {
      navigation.navigate('PreRegister');
    } else {
      console.log('Logout failed');
    }
  };

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
        <Text style={styles.pageHeaderText}>ADMIN</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
        <View></View>
      </View>
    </View>
  );
};

export default AdminHeader;

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
    fontSize: 30,
    fontFamily: 'AbhayaLibre',
    marginLeft: 80,
  },
  logoutButtonText: {
    color: '#C49D62',
    letterSpacing: 2,
    fontSize: 18,
    fontFamily: 'AbhayaLibre',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    marginLeft: 30,
    color: 'white',
    padding: 7,
  },
});

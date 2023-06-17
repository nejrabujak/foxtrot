import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from 'react-native';
import MainButton from '../components/MainButton';
import bgImg from '../assets/images/bg.png';
import { useCallback, useEffect, useState, useContext } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { getUsers, userLogin } from './requests';
import { Toast } from 'toastify-react-native';
import { UserContext } from './UserContext';

SplashScreen.preventAutoHideAsync();

export default function Register({ navigation }) {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const { setUserInfo } = useContext(UserContext);

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

  const onLoginUser = async () => {
    const {
      success: isLoginSuccess,
      isAdmin,
      userInfo,
    } = await userLogin({
      userName,
      userPassword,
    });
    console.log(userInfo);
    console.log(`Username: ${userName} and User Password: ${userPassword}`);
    console.log('>>USER Admin', isAdmin);
    if (isLoginSuccess) {
      Toast.success('Login successfull!');

      setUserInfo(userInfo);

      isAdmin ? navigation.navigate('AdminPanel') : navigation.navigate('Home');
    } else {
      Toast.error('Failed to login! Password does not match!');
    }
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={bgImg} resizeMode="cover" style={styles.imageBG}>
        <Text
          style={{
            fontFamily: 'QwitcherGrypen',
            fontSize: 110,
            lineHeight: 100,
            marginTop: 50,
            color: 'white',
          }}
        >
          Wedding
        </Text>
        <Text
          style={{
            fontFamily: 'QwitcherGrypen',
            fontSize: 110,
            lineHeight: 100,
            marginBottom: 80,
            color: 'white',
          }}
        >
          planner
        </Text>

        <View style={{ width: '80%', marginBottom: 20 }}>
          <Text
            style={{ color: 'white', fontFamily: 'AbhayaLibre', fontSize: 25 }}
          >
            Username
          </Text>
          <TextInput
            onChangeText={(text) => setUserName(text)}
            style={{
              fontFamily: 'AbhayaLibre',
              fontSize: 25,
              color: 'white',
              width: '100%',
              height: 40,
              borderBottomWidth: 3,
              paddingLeft: 15,
              paddingBottom: 10,
              marginTop: 15,
              borderColor: 'white',
            }}
          />
        </View>
        <View style={{ width: '80%', marginBottom: 100 }}>
          <Text
            style={{ color: 'white', fontFamily: 'AbhayaLibre', fontSize: 25 }}
          >
            Password
          </Text>
          <TextInput
            onChangeText={(text) => setUserPassword(text)}
            secureTextEntry={true}
            style={{
              fontFamily: 'AbhayaLibre',
              fontSize: 25,
              color: 'white',
              width: '100%',
              height: 40,
              borderBottomWidth: 3,
              paddingLeft: 15,
              paddingBottom: 10,
              marginTop: 15,
              borderColor: 'white',
            }}
          />
        </View>

        <MainButton
          onPress={() => onLoginUser()}
          title="LOG IN"
          style={{ fontFamily: 'AbhayaLibre', marginBottom: 10 }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});

import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable } from 'react-native';
import MainButton from '../components/MainButton';
import Button from '../components/Button';
import bgImg from '../assets/images/bg.png';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function PreRegister({ navigation }) {
  const [fontsLoaded] = useFonts({
    'AbhayaLibre': require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    'QwitcherGrypen': require('../assets/fonts/QwitcherGrypen-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
       <ImageBackground source={bgImg} resizeMode="cover" style={styles.imageBG}>
        <Text style={{fontFamily: 'AbhayaLibre', fontSize: 35, marginBottom: 100, marginTop: 50, color: 'white'}}>Welcome to</Text>
        <Text style={{fontFamily: 'QwitcherGrypen', fontSize: 110, lineHeight: 100, color: 'white'}}>Wedding</Text>
        <Text style={{fontFamily: 'QwitcherGrypen', fontSize: 110, lineHeight: 100, marginBottom: 100, color: 'white'}}>planner</Text>
        <MainButton title="SIGN UP" style={{fontFamily: 'AbhayaLibre', marginBottom: 150}} onPress={() => navigation.navigate('Registration')}/>

        <View style={{position: 'absolute', bottom: 20}}>
          <Text style={{fontFamily: 'AbhayaLibre', fontSize: 20, color: 'white'}}>Already have an account?</Text>
          <Button onPress={() => navigation.navigate('Login')} title="LOG IN" style={{fontFamily: 'AbhayaLibre'}}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',  
    backgroundImage: {bgImg},
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%", 
    width: "100%", 
  },
});

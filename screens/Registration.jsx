import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable, ScrollView } from 'react-native';
import MainButton from '../components/MainButton';
import Button from '../components/Button';
import bgImg from '../assets/images/bg.png';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Registration({ navigation }) {
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
    <ScrollView style={styles.container} onLayout={onLayoutRootView}>
       <ImageBackground source={bgImg} resizeMode="cover" style={styles.imageBG}>
        
        <MainButton title="Name" style={{fontFamily: 'AbhayaLibre', marginBottom: 50, marginTop: 150}} />

        <MainButton title="Surname" style={{fontFamily: 'AbhayaLibre', marginBottom: 50}} />

        <MainButton title="Username" style={{fontFamily: 'AbhayaLibre', marginBottom: 50}} />

        <MainButton title="Finance's name" style={{fontFamily: 'AbhayaLibre', marginBottom: 50}} />

        <MainButton title="Wedding date" style={{fontFamily: 'AbhayaLibre', marginBottom: 50}} />

        <MainButton title="Budget" style={{fontFamily: 'AbhayaLibre', marginBottom: 80}} />


        <MainButton title="Save" style={{fontFamily: 'AbhayaLibre', marginBottom: 10}} />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10000,  
    backgroundImage: {bgImg},
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%", 
  },
});

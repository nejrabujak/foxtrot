import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable } from 'react-native';
import MainButton from '../components/MainButton';
import Button from '../components/Button';
import bgImg from '../assets/images/bg.png';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Register( { navigation } ) {
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
        <Text style={{fontFamily: 'QwitcherGrypen', fontSize: 110, lineHeight: 100, marginTop: 50, color: 'white'}}>Wedding</Text>
        <Text style={{fontFamily: 'QwitcherGrypen', fontSize: 110, lineHeight: 100, marginBottom: 80, color: 'white'}}>planner</Text>
       
        <View style={{width:'80%', marginBottom: 20}}>
            <Text style={{color:'white', fontFamily: 'AbhayaLibre', fontSize: 25}}>Username</Text>
            <TextInput
                // onChangeText={onChangeText}
                // value={text}
                style={{fontFamily: 'AbhayaLibre', fontSize: 25, color: 'white', width:"100%", height: 40,  borderBottomWidth: 3, paddingLeft: 15, paddingBottom: 10, marginTop: 15, borderColor: 'white'}}
            />
        </View>
        <View style={{width:'80%', marginBottom: 100}}>
            <Text style={{color:'white', fontFamily: 'AbhayaLibre', fontSize: 25}}>Password</Text>
            <TextInput
                // onChangeText={onChangeText}
                // value={text}
                secureTextEntry={true}
                style={{fontFamily: 'AbhayaLibre', fontSize: 25, color: 'white', width:"100%", height: 40, borderBottomWidth: 3, paddingLeft: 15, paddingBottom: 10, marginTop: 15, borderColor: 'white'}}
            />
        </View>
    

        <MainButton onPress={() => navigation.navigate('Home')} title="LOG IN" style={{fontFamily: 'AbhayaLibre', marginBottom: 10}}/>
        
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
    height: "100%", 
    width: "100%", 
  },
});

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import bgImg from '../assets/images/bg.png';
import HomeHamburger from '../assets/images/HomeHamburger.png';
import { useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CountdownBubble from '../components/CountdownBubble';

SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }) {
  const countdownData = {
    targetDate: '2023-08-23T00:00:00Z',
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(countdownData.targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(countdownData.targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [countdownData.targetDate]);

  function calculateTimeLeft(date) {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

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

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={bgImg} resizeMode="cover" style={styles.imageBG}>
        <TouchableOpacity
          style={styles.Hamburger}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={HomeHamburger} />
        </TouchableOpacity>

        <Text style={styles.nameF}>Mia</Text>
        <Text style={styles.ampersand}>&</Text>
        <Text style={styles.nameM}>Mark</Text>

        <Text style={styles.introToCountdown}>Are getting married in</Text>

        <View style={styles.countdownBubbles}>
          <CountdownBubble timeValue={timeLeft.months} timeUnit={'months'} />

          <CountdownBubble timeValue={timeLeft.days} timeUnit={'days'} />
          <CountdownBubble timeValue={timeLeft.hours} timeUnit={'hours'} />
          {/* <CountdownBubble timeValue={timeLeft.minutes} timeUnit={'minutes'} />
          <CountdownBubble timeValue={timeLeft.seconds} timeUnit={'seconds'} /> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundImage: { bgImg },
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
  Hamburger: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  nameF: {
    fontFamily: 'QwitcherGrypen',
    fontSize: 90,
    lineHeight: 100,
    color: 'white',
    marginTop: 100,
    width: '100%',
    textAlign: 'center',
  },
  ampersand: {
    fontFamily: 'QwitcherGrypen',
    fontSize: 90,
    lineHeight: 100,
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
  nameM: {
    fontFamily: 'QwitcherGrypen',
    fontSize: 90,
    lineHeight: 100,
    marginBottom: 50,
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
  introToCountdown: {
    fontFamily: 'AbhayaLibre',
    fontSize: 20,
    marginBottom: 50,
    color: 'white',
  },
  countdownBubbles: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

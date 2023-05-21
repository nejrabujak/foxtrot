import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

const CountdownBubble = ({ timeValue, timeUnit }) => {
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
    <View
      style={{
        width: '33%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'AbhayaLibre',
            fontSize: 30,
            textAlign: 'center',
            color: '#974d32',
          }}
        >
          {timeValue}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: 'AbhayaLibre',
          fontSize: 20,
          textAlign: 'center',
          color: '#ececec',
        }}
      >
        {timeUnit}
      </Text>
    </View>
  );
};

export default CountdownBubble;

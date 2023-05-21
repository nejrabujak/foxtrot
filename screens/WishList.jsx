import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SummaryHeader from '../components/SummaryHeader';

SplashScreen.preventAutoHideAsync();

export default function WishList({ navigation }) {
  const [text, setText] = useState('');
  const [inputHeight, setInputHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

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

  const handleContentSizeChange = (event) => {
    setInputHeight(event.nativeEvent.contentSize.height);
  };

  const handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      setText(text + '\n');
    }
  };

  const onContainerLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContainerHeight(height);
  };

  const handlePress = () => {
    navigation.navigate('Home')
  };

  const lineCount = Math.floor(containerHeight / 10);
  const lines = Array.from({ length: lineCount }, (_, i) => i);

  return (
    <View style={styles.container}>
      <SummaryHeader title={'WISH LIST'} onPress={handlePress} onPressDrawer={() => navigation.openDrawer()}/>
      <View style={styles.notesBlock} onLayout={onContainerLayout}>
        <Text style={styles.notesHeader}>Notes</Text>
        {lines.map((line) => (
          <View
            key={line}
            style={[
              styles.line,
              {
                height: 1,
              },
            ]}
          />
        ))}
        <TextInput
          style={[
            styles.input,
            {
              height: Math.max(100, inputHeight),
            },
          ]}
          multiline={true}
          value={text}
          onChangeText={(text) => setText(text)}
          onContentSizeChange={handleContentSizeChange}
          onKeyPress={handleKeyPress}
          onSubmitEditing={() => setInputHeight(0)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notesHeader: {
    fontFamily: 'AbhayaLibre',
    fontSize: 28,
    color: 'white',
    marginTop: 30,
  },
  notesBlock: {
    width: '85%',
    flex: 4,
    backgroundColor: 'rgba(196, 157, 98, 0.85)',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 5,
    textAlignVertical: 'top',
    textAlign: 'center',
    fontFamily: 'AbhayaLibre',
    fontSize: 25,
    color: 'white',
    width: '90%',
    lineHeight: 53,
    position: 'absolute',
    top: 80,
  },
  line: {
    width: '90%',
    backgroundColor: 'white',
    marginVertical: 26,
    top: 32,
  },
});

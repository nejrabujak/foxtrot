import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { useCallback, useState, useContext, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SummaryHeader from '../components/SummaryHeader';
import { UserContext } from './UserContext';
import { updateUserInfo } from './requests';

SplashScreen.preventAutoHideAsync();

export default function WishList({ navigation }) {
  const [text, setText] = useState('');
  const [inputHeight, setInputHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    if (userInfo) {
      // const { wishList } = userInfo;
      setText(userInfo.wishList);
    }
  }, [userInfo]);

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

  const handleSaveNotes = () => {
    if (userInfo) {
      const updatedUserInfo = {
        ...userInfo,
        wishList: text,
      };
      updateUserInfo(updatedUserInfo);
    }
  };

  const onContainerLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContainerHeight(height);
  };

  const handlePress = () => {
    navigation.navigate('Home');
  };

  const lineCount = Math.floor(containerHeight / 10);
  const lines = Array.from({ length: lineCount }, (_, i) => i);

  return (
    <View style={styles.container}>
      <SummaryHeader
        title={'WISH LIST'}
        onPress={handlePress}
        onPressDrawer={() => navigation.openDrawer()}
      />
      <View style={styles.notesBlock} onLayout={onContainerLayout}>
        <View style={styles.notesLayout}>
          <Text style={styles.notesHeader}>Notes</Text>
          <Button
            title="Save"
            onPress={handleSaveNotes}
            color="rgba(196, 157, 98, 0.6)"
          />
        </View>
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
  notesLayout: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    marginTop: 30,
  },
  notesHeader: {
    fontFamily: 'AbhayaLibre',
    fontSize: 28,
    color: 'white',
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

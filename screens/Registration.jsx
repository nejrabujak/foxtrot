import {
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import MainButton from '../components/MainButton';
import bgImg from '../assets/images/bg.png';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import { signUp } from './requests';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Toast } from 'toastify-react-native'

SplashScreen.preventAutoHideAsync();

export default function Registration({ navigation }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState()
  const [userData, setUserData] = useState({
    name: '',
    surename: '',
    username: '',
    password: '',
    fianceName: '',
    weddingDate: null,
    budget: null,
  });

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

  const handlePress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (_, selectedDate) => {
    setSelectedDate(selectedDate)
    if (selectedDate) {
      setShowDatePicker(false);
      setUserData({
        ...userData,
        weddingDate: selectedDate
      })
    }
  };
  const onSaveEnteredUserData = async () => {
    const { success, userInfo } = await signUp(userData)
    if (success) {
      navigation.navigate('Home', {
        params: {
          userInfo
        },
      });
      Toast.success('Successfully saved!')
    } else {
      Alert.alert('Failed to save user data')
      navigation.navigate('Registration')
    }

  }

  const displayDateText = selectedDate ? `${selectedDate.toLocaleDateString("en-US")}` : 'Wedding date'

  return (
    <ImageBackground source={bgImg} resizeMode="cover" style={styles.imageBG}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
        style={styles.container}
        onLayout={onLayoutRootView}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor={'white'}
          onChangeText={(text) =>
            setUserData({
              ...userData,
              name: text,
            })
          }
        />

        <TextInput
          style={styles.textInput}
          placeholder="Surname"
          placeholderTextColor={'white'}
          onChangeText={(text) =>
            setUserData({
              ...userData,
              surename: text,
            })
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor={'white'}
          onChangeText={(text) =>
            setUserData({
              ...userData,
              username: text,
            })
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={'white'}
          onChangeText={(text) =>
            setUserData({
              ...userData,
              password: text,
            })
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder="Fiances name"
          placeholderTextColor={'white'}
          onChangeText={(text) =>
            setUserData({
              ...userData,
              fianceName: text,
            })
          }
        />

        <TouchableOpacity onPress={handlePress} style={styles.textInput}>
          <Text style={styles.txtStyle}>{displayDateText}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            minimumDate={new Date()}
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <TextInput
          style={styles.textInput}
          placeholder="Budget"
          placeholderTextColor={'white'}
          onChangeText={(text) =>
            setUserData({
              ...userData,
              budget: text,
            })
          }
        />
        <MainButton
          title="SAVE"
          style={{ fontFamily: 'AbhayaLibre', marginTop: 25 }}
          onPress={() => onSaveEnteredUserData()}
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // justifyContent: 'center',
  },
  imageBG: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  txtStyle: {
    color: 'white',
    letterSpacing: 0.8,
    fontSize: 26,
    fontFamily: 'AbhayaLibre',
  },
  textInput: {
    width: '90%',
    fontSize: 26,
    letterSpacing: 0.8,
    fontFamily: 'AbhayaLibre',
    padding: 8,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    color: 'white',
    textAlign: 'center',
  },
});

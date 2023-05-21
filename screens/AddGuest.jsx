import SaveButton from '../components/SaveButton';
import SummaryHeader from '../components/SummaryHeader';
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { useFonts } from 'expo-font';

const AddGuest = () => {
  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.pageContainer}>
      <SummaryHeader title={'ADD GUEST'} />
      <View style={styles.mainBody}>
        <ScrollView style={styles.scrollStyle}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={100}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <TextInput
              style={styles.inputStyle}
              //  value={firstNameText}
              placeholder="FIRST NAME"
              placeholderTextColor="#906828"
            />
          </KeyboardAvoidingView>
          <TextInput
            style={styles.inputStyle}
            //  value={lastNameText}
            placeholder="LAST NAME"
            placeholderTextColor="#906828"
          />
          <TextInput
            style={styles.inputStyle}
            //  value={phoneNum}
            placeholder="PHONE NUMBER"
            placeholderTextColor="#906828"
          />
          <TextInput
            style={styles.inputStyle}
            //  value={email}
            placeholder="EMAIL"
            placeholderTextColor="#906828"
          />
          <TextInput
            style={styles.inputStyle}
            //  value={table}
            placeholder="TABLE"
            placeholderTextColor="#906828"
          />
          <TextInput
            style={styles.inputStyle}
            //  value={specReq}
            placeholder="SPECIAL REQUESTS"
            placeholderTextColor="#906828"
          />
          <TextInput
            style={styles.inputStyle}
            //  value={status}
            placeholder="STATUS"
            placeholderTextColor="#906828"
          />
          <SaveButton />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddGuest;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollStyle: {
    marginBottom: 30,
    width: '90%',
  },
  inputStyle: {
    borderWidth: 6,
    borderColor: '#906828',
    padding: 10,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
    letterSpacing: 2,
    marginBottom: 30,
  },
});

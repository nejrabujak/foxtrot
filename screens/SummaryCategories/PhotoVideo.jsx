import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useFonts } from 'expo-font';
import SummaryHeader from '../../components/SummaryHeader';
import SearchButton from '../../components/SearchButton';
import { useState } from 'react';

const PhotoVideo = ({ navigation }) => {
  const [budget, setBudget] = useState('Budget');
  const [selectedOption, setSelectedOption] = useState('Location');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const options = ['Sarajevo', 'Tuzla', 'Mostar', 'Banja Luka'];

  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleBackIcon = () => {
    navigation.navigate('Summary');
  };

  const handlePress = () => {
    navigation.navigate('SearchResult', { ctgParam: 'Photo / Video' });
  };

  const handleTextChange = (inputText) => {
    setBudget(inputText);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.pageContainer}>
      <SummaryHeader
        onPress={handleBackIcon}
        onPressDrawer={() => navigation.openDrawer()}
      />

      <View style={styles.mainBody}>
        <View style={styles.mBCategories}>
          <Text style={styles.mBCategoriesTxt}>PHOTO / VIDEO</Text>
        </View>

        <View style={styles.scrollStyle}>
          <View style={styles.catBtnStyle}>
            <TouchableOpacity
              onPress={() => setIsModalVisible(true)}
              style={styles.catBtnStyling}
            >
              <Text style={styles.catBtnTextStyle}>
                {selectedOption || 'Location'}
              </Text>
            </TouchableOpacity>

            {/* Modal to display options */}
            <Modal
              visible={isModalVisible}
              animationType="slide"
              transparent={true}
            >
              <View style={styles.modalContainerCatBtn}>
                <View style={styles.modalContentCatBtn}>
                  {/* List of options */}
                  <FlatList
                    data={options}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.optionsCatStyle}
                        // key={option}
                        onPress={() => handleOptionSelect(item)}
                      >
                        <Text style={styles.optionCatText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                  />
                </View>
              </View>
            </Modal>
          </View>

          <View style={styles.btnPosition}>
            <TextInput
              style={styles.btnStyle}
              placeholder={budget || 'Budget'}
              placeholderTextColor={'white'}
              onChangeText={() => handleTextChange()}
            />
          </View>
        </View>

        <View style={styles.searchBtn}>
          <SearchButton onPress={handlePress} title={'Search'} />
        </View>
      </View>
    </View>
  );
};

export default PhotoVideo;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainBody: {
    flex: 4,
    width: '100%',
  },
  scrollStyle: {
    flex: 4,
    marginTop: 20,
  },
  mBCategories: {
    width: '90%',
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  mBCategoriesTxt: {
    color: '#C49D62',
    letterSpacing: 2,
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
  searchBtn: {
    flex: 1,
  },
  btnPosition: {
    marginTop: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    width: '87%',
    backgroundColor: 'rgba(196, 157, 98, 0.85);',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
    color: 'white',
  },
  catBtnStyle: {
    marginTop: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catBtnStyling: {
    width: '87%',
    backgroundColor: 'rgba(196, 157, 98, 0.85);',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catBtnTextStyle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AbhayaLibre',
    letterSpacing: 4,
  },
  optionCatText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
  modalContainerCatBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContentCatBtn: {
    backgroundColor: 'rgb(228, 220, 220)',
    padding: 20,
    borderRadius: 5,
    width: '90%',
    height: 500,
  },
  optionsCatStyle: {
    width: '100%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    padding: 8,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import SummaryHeader from '../components/SummaryHeader';
import LocationContainer from '../components/LocationContainer';
import { useContext, useState } from 'react';
import { CategoryContext } from './CategoryContext';
import { UserContext } from './UserContext';
import axios from 'axios';

const SearchResults = ({ navigation, route }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedShopId, setSelectedShopId] = useState(null);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { categories, updateCategories } = useContext(CategoryContext);
  const { ctgParam } = route.params;

  const handleChoice = async (choice) => {
    if (choice === 'Yes') {
      setIsModalVisible(!isModalVisible);
      try {
        const updatedShop = {
          userIdSelected: userInfo.username,
        };
        await axios.put(
          `https://6470c23e3de51400f724e3f9.mockapi.io/wp/dresses/${selectedShopId}`,
          updatedShop
        );
        console.log('User ID stored in the selected shop:', updatedShop);

        const updatedCategories = categories.map((category) =>
          category.id === selectedShopId
            ? { ...category, ...updatedShop }
            : category
        );
        updateCategories(updatedCategories);
      } catch (err) {
        console.log('Error storing user ID in the selected shop:', error);
      }
      navigation.navigate('My wedding');
    } else if (choice === 'No') {
      let data = categories.filter((cat) => cat.category === ctgParam);
      console.log(data.map((dat) => dat.companyName));
      // console.log(categories);
      setIsModalVisible(!isModalVisible);
    }
  };

  const handleModalVisibility = (shopId) => {
    setSelectedShopId(shopId);
    setIsModalVisible(!isModalVisible);
  };

  const handleBackIcon = () => {
    navigation.navigate('Summary');
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.pageHeader}>
        <SummaryHeader
          onPress={handleBackIcon}
          title={'SUMMARY'}
          onPressDrawer={() => navigation.openDrawer()}
        />
      </View>
      <View style={styles.mainBody}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(!isModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={[styles.textStyle, styles.questionStyle]}>
                Do you want to save this to your wedding list?
              </Text>
              <View style={styles.modalBtnsContainer}>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => handleChoice('Yes')}
                >
                  <Text style={styles.textStyle}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => handleChoice('No')}
                >
                  <Text style={styles.textStyle}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.catPosition}>
          <Text style={styles.catText}>{ctgParam.toUpperCase()}</Text>
        </View>
        <ScrollView style={styles.displayedLocations}>
          {categories
            .filter((cat) => cat.category === ctgParam)
            .map((cat) => (
              <TouchableOpacity
                key={cat.id}
                onPress={() => handleModalVisibility(cat.id)}
              >
                <LocationContainer
                  title={cat.companyName}
                  address={cat.location}
                  hoursOpened={8}
                  hoursClosed={17}
                  phoneNumber={cat.phoneNumber}
                  // image={cat.imageUrl}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageHeader: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -100,
  },
  mainBody: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  catPosition: {
    justifyContent: 'flex-start',
    width: '90%',
    marginTop: 50,
  },
  catText: {
    color: '#C49D62',
    letterSpacing: 1,
    fontSize: 25,
    fontFamily: 'AbhayaLibre',
  },
  displayedLocations: {
    height: 200,
  },
  mBCategories: {
    width: '98%',
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
  centeredView: {
    position: 'absolute',
    bottom: '4%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: '92%',
    height: 412,
    backgroundColor: 'rgba(220, 197, 163, 0.88)',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonClose: {
    backgroundColor: 'rgba(164, 135, 93, 0.86)',
    width: '100%',
    elevation: 2,
    padding: 10,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'AbhayaLibre',
    fontSize: 27,
    letterSpacing: 2,
  },
  questionStyle: {
    width: '80%',
  },
  modalBtnsContainer: {
    width: '100%',
    height: 150,
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  modalText: {
    fontFamily: 'AbhayaLibre',
    width: '80%',
    marginBottom: 15,
    color: 'white',
    textAlign: 'center',
    fontSize: 27,
    letterSpacing: 2,
  },
});

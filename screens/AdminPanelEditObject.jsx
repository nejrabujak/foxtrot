import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';
import AdminHeader from '../components/AdminHeader';
import { editItem } from './requests';
import { Toast } from 'toastify-react-native';

const AdminPanelEditObject = ({ navigation, route }) => {
  const { itemId, shopData, categoryName } = route.params;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    setName(shopData.companyName);
    setAddress(shopData.location);
    setPhoneNumber(shopData.phoneNumber);
  }, [shopData]);

  const [fontsLoaded] = useFonts({
    AbhayaLibre: require('../assets/fonts/AbhayaLibre-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = () => {
    navigation.navigate('admin/category', { categoryName: shopData.category });
  };

  const handleSubmit = async (navigation) => {
    const targetId = shopData.id;

    const formattedData = {
      companyName: name,
      location: address,
      phoneNumber,
      // imageUrl: 'some url',
      isExpensive: true,
    };

    const response = await editItem(formattedData, targetId);

    if (response.success) {
      navigation.navigate('AdminPanel');
      Toast.success('Form data changed successfully!');
    } else {
      Alert.alert('Error', 'Please fill in all fields!');
      console.log(shopData.id);
    }
  };

  const handleImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult === false) {
      console.log('Permission to access gallery is required!');
      return;
    }

    const imageResult = await ImagePicker.launchImageLibraryAsync();
    if (!imageResult.cancelled) {
      setSelectedImg(imageResult.uri);
      console.log(imageResult.uri);
    }
  };

  const handleTextChange = (text, propertyName) => {
    if (propertyName === 'Name') {
      setName(text);
    } else if (propertyName === 'Address') {
      setAddress(text);
    } else if (propertyName === 'Phone Number') {
      setPhoneNumber(text);
    }
  };

  return (
    <View style={styles.pageContainer}>
      <AdminHeader onPress={handlePress} />

      <View style={styles.mainBody}>
        <View style={styles.mBCategories}>
          <Text style={styles.mBCategoriesTxt}>EDIT</Text>
        </View>

        {/* Category Name */}
        <View style={styles.catBtnStyle}>
          <TouchableOpacity style={styles.catBtnStyling}>
            <Text style={styles.catBtnTextStyle}>{categoryName}</Text>
          </TouchableOpacity>
        </View>

        {/* Shop data input */}
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder={name}
            value={name}
            placeholderTextColor={'white'}
            onChangeText={(text) => handleTextChange(text, 'Name')}
          />
        </View>
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder={address}
            value={address}
            placeholderTextColor={'white'}
            onChangeText={(text) => handleTextChange(text, 'Address')}
          />
        </View>

        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder={phoneNumber}
            value={phoneNumber}
            placeholderTextColor={'white'}
            onChangeText={(text) => handleTextChange(text, 'Phone Number')}
          />
        </View>
        <View style={styles.btnPosition}>
          {selectedImg ? (
            <TouchableOpacity style={styles.imgBtn} onPress={handleImagePicker}>
              <Image source={{ uri: selectedImg }} style={styles.img} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btnStyleImg}
              onPress={handleImagePicker}
            >
              <Text style={styles.btnText}>Image</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.editBtn}>
          <TouchableOpacity
            onPress={() => handleSubmit(navigation)}
            style={styles.editBtnStyle}
          >
            <Text style={styles.editBtnText}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdminPanelEditObject;

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
  img: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  btnStyle: {
    textAlign: 'center',
    marginTop: 20,
    width: '100%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyleImg: {
    width: '93%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'AbhayaLibre',
    letterSpacing: 2,
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
  btnPosition: {
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'rgb(228, 220, 220)',
    padding: 20,
    borderRadius: 5,
    width: '90%',
    height: 180,
    justifyContent: 'space-around',
  },
  optionsStyle: {
    width: '100%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    padding: 8,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle: {
    marginTop: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    width: '87%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'AbhayaLibre',
    color: 'white',
  },
  editBtnStyle: {
    marginTop: 20,
    width: '36%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editBtnText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'AbhayaLibre',
    letterSpacing: 2,
  },
  editBtn: {
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  optionsCatStyle: {
    width: '100%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    padding: 8,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
  catBtnStyle: {
    marginTop: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catBtnStyling: {
    width: '87%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
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
});

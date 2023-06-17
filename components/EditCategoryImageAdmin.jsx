import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const EditCategoryImageAdmin = ({ objProp, onPress }) => {
  return (
    <View style={styles.btnPosition}>
      <TouchableOpacity style={styles.imgBtn} onPress={onPress}>
        <Image style={styles.btnStyle} source={objProp} />
      </TouchableOpacity>
    </View>
  );
};

export default EditCategoryImageAdmin;

const styles = StyleSheet.create({
  btnPosition: {
    marginTop: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    width: '25%',
    backgroundColor: 'rgba(196, 157, 98, 0.59);',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

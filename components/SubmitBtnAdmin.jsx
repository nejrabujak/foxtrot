import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubmitBtnAdmin = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyles}>
      <Text style={styles.btnText}>Submit</Text>
    </TouchableOpacity>
  );
};

export default SubmitBtnAdmin;

const styles = StyleSheet.create({
  btnStyles: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
  btnText: {
    color: 'rgba(196, 157, 98, 0.59)',
    textAlign: 'center',
    fontSize: 15,
  },
});

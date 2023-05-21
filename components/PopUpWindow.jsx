import React from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';

const PopUpWindow = ({ visible, onPress }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.textStyle, styles.questionStyle]}>
            Do you want to save this to your Summary list?
          </Text>
          <View style={styles.modalBtnsContainer}>
            <TouchableOpacity style={styles.buttonClose} onPress={onPress}>
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonClose} onPress={onPress}>
              <Text style={styles.textStyle}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default PopUpWindow;

import React, { useState } from "react";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Calender({ navigation }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  ////
  
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (time) => {
    console.warn("A date has been picked: ", time);
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
        
      <TouchableOpacity  style={styles.btn} onPress={showDatePicker}>
          <Text style={styles.logoText}>Select Date</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btn} onPress={showTimePicker}>
          <Text style={styles.logoText}>Select Time</Text>
      </TouchableOpacity>      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />


    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#467599',
      padding: 8,
      textAlign: 'center',
      marginTop: 50
  
    },
   
    logoText: {
      fontSize: 17,
      color: '#7986cb',
      fontWeight: 'bold'
    },
    btn: {
      borderWidth: 2,
      borderRadius: 10,
      width: 170,
      padding: 18,
      borderColor: '#7986cb',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
    },
    
  });
  
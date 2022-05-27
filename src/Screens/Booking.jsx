import React from "react";
import { NativeBaseProvider, Text, View, Image } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import Calender from './Calender';
import Header from "../common/Header";

export default function Booking({ navigation }) {
  return (
    <View>
      <Header />

      <View style={styles.calender}>
        <Calendar
          markingType="multi-period"
          markedDates={{
            "2022-3-14": {
              periods: [
                { startingDay: false, endingDay: true, color: "#5f9ea0" },
                { startingDay: false, endingDay: true, color: "#ffa500" },
                { startingDay: true, endingDay: false, color: "#f0e68c" },
              ],
            },
            "2022-3-11": {
              periods: [
                { startingDay: true, endingDay: false, color: "#ffa500" },
                { color: "transparent" },
                { startingDay: false, endingDay: false, color: "#f0e68c" },
              ],
            },
          }}
        />
      </View>
      <Calender />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity style={styles.btn} onPress={() => {
                    navigation.navigate('Success')
                }}>
          <Text style={styles.bookingText}>Booking</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#467599',
    padding: 8,
    textAlign: "center",
  },

  imgLogo: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#7986cb",
    padding: 8,
    // marginTop: 10,

    // borderRadius: '50%',
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 30,
    color: "#1D3354",
    textAlign: "center",
  },
  text: {
    marginBottom: 10,
    color: "#444",
  },
  calender: {
    margin: 10,
    borderRadius: 20,
    shadowColor: "#7986cb",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btn: {
    // borderWidth: 2,
    borderRadius: 10,
    width: 200,
    padding: 20,
    // borderColor: '#1D3354',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: "#7986cb",
    color: '#fff'

  },
  
  bookingText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
});

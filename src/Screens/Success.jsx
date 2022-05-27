import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

export default function Success({navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.contain}>
            <Image source={require('../Imgs/success.gif')} style={styles.imgLogo}/>
            <Text style={styles.title}>Success</Text>
            <TouchableOpacity  style={styles.btn} onPress={() => {
                    navigation.navigate('ViewBooking')
                }}>
                <Text style={styles.bookingText}>View my Bookings</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: '#467599',
      padding: 8,
      textAlign: "center",
    },
    contain: {
        width: 400,
        height: 400,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      borderRadius: 20,
      shadowColor: "#467599",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 15,
    },
    imgLogo: {
      width: "80%",
      height: 230,
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
      marginTop: 10,
      color: "green",
      textAlign: "center",
    },
    text: {
      marginBottom: 10,
      color: "green",
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
      color: '#fff',
      marginTop: 10
  
    },
    
    bookingText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
      
    },
  });
  
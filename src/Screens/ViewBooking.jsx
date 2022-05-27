import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

export default function ViewBooking({navigation }) {
    return(
        <View style={styles.container}>
           <Text>ViewBooking</Text>

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
   
  });
  
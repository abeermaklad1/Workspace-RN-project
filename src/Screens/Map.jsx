import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import FooterUser from "../common/FooterUser";

export default function Map({navigation }) {
    
      return (
        <View style={{ flex: 1, marginTop: 90 }}>
          <Text>Map</Text>
          <FooterUser navigation={navigation}/>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   // backgroundColor: '#467599',
    //   padding: 8,
    //   textAlign: "center",
    },
   
  });
  
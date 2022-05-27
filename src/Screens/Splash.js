import React from "react";
import {
  NativeBaseProvider,
  HStack,
  Image,
  Text,
  View,
  Spinner,
} from "native-base";

// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash({navigation }) {
  let startHome = () => {
    setTimeout(() => {
      navigation.navigate("IntroOne");
    }, 2000);
  };

  const Example = () => {
    return (
      <HStack space={2} justifyContent="center">
        <Spinner color="#fff" accessibilityLabel="Loading posts" />
      </HStack>
    );
  };
  return (
    <NativeBaseProvider>
      {/* 5c6bc0 More Dark*/}
      <View
        style={{
          flex: 1,
          backgroundColor: "#7986cb",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../Imgs/welcome.svg")}
          style={{ width: 155, height: 130 }}
        />
        <Text
          style={{
            fontWeight: "bold",
            padding: 10,
            fontSize: 20,
            color: "#fff",
          }}
        >
          App Name
        </Text>
        <Example />
        {startHome()}
      </View>
    </NativeBaseProvider>
  );
  // let moveHome=()=>{
  //     AsyncStorage.getItem("visited").then( (value)=>{
  //         if(value){
  //             setTimeout(() => {
  //                 this.navigation.navigate('Home')
  //             }, 1000);
  //         } else{
  //             setTimeout(() => {
  //                 this.navigation.navigate('IntroOne')
  //             }, 1000);
  //         }
  //     })
  // }
}

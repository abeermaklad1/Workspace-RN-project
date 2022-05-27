import React from "react";
import { Text, NativeBaseProvider, View, ScrollView } from "native-base";
import { TouchableOpacity } from 'react-native';
import WorkSpaceCard from "../common/WorkSpaceCard";
import Header from "../common/Header";
import FooterUser from "../common/FooterUser";

export default function WorkSpace({navigation }) {
  return (
    <NativeBaseProvider>

      <Header/>

      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 26 ,marginTop:40}}>WorkSpaces</Text>
      <ScrollView>
        <View style={{ flexDirection: "row", flex: 2, margin: 20 }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('WorkSpaceDetailes')
          }} style={{ flex: 1, marginRight: 10 }}>
            <WorkSpaceCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('WorkSpaceDetailes')
          }} style={{ flex: 1, marginRight: 10 }}>
            <WorkSpaceCard />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", flex: 2, margin: 20 }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('WorkSpaceDetailes')
          }} style={{ flex: 1, marginRight: 10 }}>
            <WorkSpaceCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('WorkSpaceDetailes')
          }} style={{ flex: 1, marginRight: 10 }}>
            <WorkSpaceCard />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", flex: 2, margin: 20 }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('WorkSpaceDetailes')
          }} style={{ flex: 1, marginRight: 10 }}>
            <WorkSpaceCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('WorkSpaceDetailes')
          }} style={{ flex: 1, marginRight: 10 }}>
            <WorkSpaceCard />
          </TouchableOpacity>
        </View>

      </ScrollView>
      <FooterUser/>


    </NativeBaseProvider>
  );
};
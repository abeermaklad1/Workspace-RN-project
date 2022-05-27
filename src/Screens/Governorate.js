import React from "react";
import { View, Text, NativeBaseProvider, ScrollView } from "native-base";
import { TouchableOpacity } from 'react-native';
import GovernorateCard from "../common/GovernorateCard";
import Header from "../common/Header";
import FooterUser from "../common/FooterUser";


export default function Governorate({navigation }) {
    return (
        <NativeBaseProvider>

            <Header/>

            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 26 ,marginTop:40 }}>Governorates</Text>

            <ScrollView>
                <View style={{ flexDirection: "row", flex: 2, margin: 20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('WorkSpace')
                    }} style={{ flex: 1, marginRight: 10 }}>
                        <GovernorateCard />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('WorkSpace')
                    }} style={{ flex: 1, marginRight: 10 }}>
                        <GovernorateCard />
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <ScrollView>
                <View style={{ flexDirection: "row", flex: 2, margin: 20 }}>
                    <TouchableOpacity onPress={() => {
                       navigation.navigate('WorkSpace')
                    }} style={{ flex: 1, marginRight: 10 }}>
                        <GovernorateCard />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('WorkSpace')
                    }} style={{ flex: 1, marginRight: 10 }}>
                        <GovernorateCard />
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <ScrollView>
                <View style={{ flexDirection: "row", flex: 2, margin: 20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('WorkSpace')
                    }} style={{ flex: 1, marginRight: 10 }}>
                        <GovernorateCard />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('WorkSpace')
                    }} style={{ flex: 1, marginRight: 10 }}>
                        <GovernorateCard />
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <FooterUser navigation={navigation}/>

        </NativeBaseProvider>
    );
};
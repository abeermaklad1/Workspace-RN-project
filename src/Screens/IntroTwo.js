import React from "react";
import { NativeBaseProvider, Text, View, Image } from "native-base";
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';


export default function IntroTwo({navigation}) {

    return (
        <NativeBaseProvider>
            <View style={{ flex: 10 }}>
                <View style={{ flex: 4, backgroundColor: "#7986cb" }}>
                    <View style={{ flex: 1, textAlign: "start", alignItems: "flex-start", justifyContent: "flex-start" }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('IntroThree')
                        }}>
                            <Text style={{ color: "#fff", fontSize: 20, padding: 20 }}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../Imgs/happy.svg')} style={{ width: 110, height: 100, borderRadius: 100 ,backgroundColor:"#fff"}} />
                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#fff", margin: 5 }}></View>
                            <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#A5A5A9", margin: 5 }}></View>
                            <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#fff", margin: 5 }}></View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 6, backgroundColor: "#fff" }}>
                    <View style={{ flex: 4, alignItems: "center", paddingHorizontal: 50, paddingTop: 20 }}>
                        <Text style={{ padding: 10, textAlign: "center", fontSize: 19, color: "#7986cb" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, ducimus quos exercitationem dolore voluptas autem rem veniam, id voluptate est facilis error accusamus illo eveniet laudantium omnis! Est, ad!</Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 30 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('IntroOne')
                        }} style={{ padding: 20 }}>
                            <FontAwesome name="arrow-circle-left" size={40} color="#7986cb" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('IntroThree')
                        }} style={{ padding: 20 }}>
                            <FontAwesome name="arrow-circle-right" size={40} color="#7986cb" />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </NativeBaseProvider>
    );
}
import React from "react";
import { NativeBaseProvider, Text, View, Image } from "native-base";
import { TouchableOpacity } from 'react-native';


export default function IntroThree({navigation }) {

    return (
        <NativeBaseProvider>
            <View style={{ flex: 10 }}>
                <View style={{ flex: 3, backgroundColor: "#7986cb", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../Imgs/welcoming.svg')} style={{ width: 100, height: 100, borderRadius: 100 }} />
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#fff", margin: 5 }}></View>
                        <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#fff", margin: 5 }}></View>
                        <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#A5A5A9", margin: 5 }}></View>
                    </View>
                </View>

                <View style={{ flex: 7, backgroundColor: "#fff" }}>
                    <View style={{ flex: 4, alignItems: "center", paddingHorizontal: 50, paddingTop: 20 }}>
                        <Text style={{ padding: 10, textAlign: "center", fontSize: 19, color: "#7986cb" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, dolore voluptas autem rem veniam, id voluptate est facilis error laudantium omnis! Est, ad!</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "space-around", paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ChoosingType')
                        }}>
                            <Text style={{ fontSize: 20, backgroundColor: "#7986cb", color: "#fff", width: 150, fontWeight:"bold" , textAlign: "center", paddingVertical: 15, borderRadius: 5 }}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Login')
                        }}>
                            <Text style={{ fontSize: 20, backgroundColor: "#7986cb", color: "#fff", width: 150, fontWeight:"bold" , textAlign: "center", paddingVertical: 15, borderRadius: 5 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, alignItems:"center" , marginTop:20}}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('UserHome')
                        }}>
                            <Text style={{ fontSize: 20, backgroundColor: "#7986cb", color: "#fff", width: 330, fontWeight:"bold" , textAlign: "center", paddingVertical: 15, borderRadius: 5 }}>Get Start</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </NativeBaseProvider>
    );
}
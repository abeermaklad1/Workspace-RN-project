import React from "react";
import { NativeBaseProvider, Text, View } from "native-base";
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from 'react-native-vector-icons';

export default function ChoosingType({navigation}) {

    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Login')
                }} style={{ margin: 30 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#7986cb", width: 250, paddingVertical: 20, borderRadius: 5 }}>
                        <FontAwesome5 name="user-alt" size={40} color="#fff" />
                        <Text style={{ fontSize: 26, color: "#fff", fontWeight: "bold", paddingLeft: 20 }}>Guest</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SignUp')
                }} style={{ margin: 30 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#7986cb", width: 250, paddingVertical: 20, borderRadius: 5 }}>
                        <FontAwesome5 name="user-tie" size={40} color="#fff" />
                        <Text style={{ fontSize: 26, color: "#fff", fontWeight: "bold", paddingLeft: 20 }}>Owner</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </NativeBaseProvider>
    );
}
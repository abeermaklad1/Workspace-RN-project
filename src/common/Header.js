import React from "react";
import { Text, NativeBaseProvider, Flex } from "native-base";
import { Ionicons, Entypo } from 'react-native-vector-icons';
import { TouchableOpacity } from "react-native";

export default function Header({navigation}) {
    return (
        <NativeBaseProvider>
            <Flex direction="row" bg="rgba(121, 134, 203 , 0.6)" justifyContent="space-between" py="2" px="6">
                <Flex direction="row">
                    <TouchableOpacity onPress={() => {
                        // this.navigation.navigate('')
                    }}>
                        <Entypo name="chevron-left" size={35} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold"}}>LoGo</Text>
                </Flex>
                <TouchableOpacity onPress={() => {
                    // this.navigation.navigate('Chat')
                }} style={{ paddingTop: 3 }} >
                    <Ionicons name="chatbubble-ellipses" size={30} color="#fff" />
                </TouchableOpacity>
            </Flex>
        </NativeBaseProvider>
    )
}
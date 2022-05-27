import React from "react";
import { Text, NativeBaseProvider, Flex, View } from "native-base";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';
import { TouchableOpacity } from "react-native";

export default function FooterUser({navigation }) {
    // let navigation ={props};

    return (
        <NativeBaseProvider>
            <Flex direction="row" bg="rgb(121, 134, 203 )" justifyContent="space-between" py="2" px="6">

                <TouchableOpacity onPress={() => {
                    navigation.navigate('UserHome')
                }} style={{ paddingTop: 3 }} >
                    <View px="1">
                        <FontAwesome name="home" size={25} color="#fff" />
                    </View>
                    <Text color="#fff">Home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Map')
                }}>
                    <MaterialCommunityIcons name="google-maps" size={30} color="rgb(94 94 117)"/>
                    <Text>Map</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{position:"absolute" , bottom:10 , right:-30 , backgroundColor:"#fff" ,padding:10 ,borderRadius:50 , border:"8px solid #7986cb"}}>
                        <Ionicons name="chatbubble-ellipses-outline" size={30} color="#7986cb" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Governorate')
                }}>
                    <View px="2">
                        <MaterialCommunityIcons name="city" size={25} color="rgb(94 94 117)"/>
                    </View>
                    <Text>Govern</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('ProfileUser')
                }}>
                    <View px="1">
                        <Ionicons name="person" size={25} color="rgb(94 94 117)"/>
                    </View>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </Flex>
        </NativeBaseProvider>
    )
}
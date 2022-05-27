import React from "react";
import { NativeBaseProvider, Text, View, Image, Input, Stack, Center , HStack ,Checkbox} from "native-base";
import { TouchableOpacity } from 'react-native';

export default function Login() {

    const Remember = () => {
        return <HStack space={6}>
            <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
          </HStack>;
      };

    const Example = () => {
        return <Center>
            <Stack mt={2} space={4} w="100%" maxW="350px">
              <Input size="2xl" placeholder="Email / User Name" />
              <Input mt={2} size="2xl" placeholder="Password" />
            </Stack>
          </Center>;
      };

    return (
        <NativeBaseProvider>
            <View style={{ flex: 8, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flex: 2 , justifyContent: "end" }}>
                    <Image source={require('../Imgs/profile-pic.svg')} style={{ width: 100, height: 100, borderRadius: 100 }} />
                </View>

                <View style={{ flex: 3, justifyContent: "center" }}>
                    <Example/>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center",marginTop:20 }}>
                        <Remember/>
                        <Text style={{fontSize: 18, textAlign: "center",color:"#A5A5A9" , paddingLeft: 5 }}>Remember me!!</Text>
                        <TouchableOpacity onPress={() => {
                            // this.navigation.navigate()
                        }}>
                            <Text style={{ fontSize: 18, color: "red", paddingLeft: 20 }}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 3}}>
                    <TouchableOpacity onPress={() => {
                        // this.navigation.navigate('Home')
                    }} style={{ margin: 30 }}>
                        <View style={{ backgroundColor: "#7986cb", width: 250, paddingVertical: 10, borderRadius: 5 }}>
                            <Text style={{ textAlign: "center", fontSize: 26, color: "#fff", fontWeight: "bold"}}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                        <Text style={{fontSize: 18, textAlign: "center",color:"#A5A5A9" }}>Don't have account!?</Text>
                        <TouchableOpacity onPress={() => {
                            // this.navigation.navigate('ChoosingType')
                        }}>
                            <Text style={{ fontSize: 20, color: "#7986cb", fontWeight: "bold", paddingLeft: 10 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </NativeBaseProvider>
    );
}
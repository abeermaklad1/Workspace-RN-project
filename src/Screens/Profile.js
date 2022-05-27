import { Heading, Button, Image, ScrollView } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5, MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <ScrollView >
      <View>
        <Heading style={{ textAlign: "center", color: "#b14dff", marginTop: 70 }}>
          Your Prpfile
        </Heading>
        {/* <Image
          source={{
            uri: "https://th.bing.com/th/id/R.15221e1996688099ff445825f26148da?rik=kzkc7gjg53ltVA&pid=ImgRaw&r=0",
          }}
          alt="Alternate Text"
          height={150}
          width={200}
          // marginLeft={20}
          marginTop={20}
        /> */}
      </View>
      <View style={{ marginVertical: 100 }}>
        <Button size="lg" colorScheme="blue" margin={2}>
          <FontAwesome5 name="user-edit" size={33} color="#fff" />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {" "}
            Edit Profile
          </Text>
        </Button>
        <Button size="lg" colorScheme="blue" margin={2}>
        <MaterialIcons name="place"  size={35} color="#fff" />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {" "}
            Places
          </Text>
        </Button>

        <Button size="lg" colorScheme="blue" margin={2}>
          <FontAwesome5 name="history" size={33} color="#fff" />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}> History</Text>
        </Button>
        <Button size="lg" colorScheme="green" margin={2} width={150} marginTop={33} marginLeft={15} borderRadius={18}>
          <MaterialCommunityIcons name="logout" size={40} color="#fff" />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>LOG OUT</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

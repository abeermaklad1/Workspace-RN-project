import { Heading, Button, Image, ScrollView } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import FooterUser from "../common/FooterOwner";

export default function Profile({ navigation }) {
  return (
   <View>
      <ScrollView>
      <Heading
        style={{ textAlign: "center", color: "#b14dff", paddingBottom: 25 }}
      >
        Prpfile User
      </Heading>

      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Image
          source={require("../Imgs/2.jpg")}
          style={{ width: 220, height: 220 }}
        />
        <View style={{ marginLeft: 90 }}>
          <Text style={{ fontSize: 20, paddingBottom: 7 }}>Name : </Text>
          <Text style={{ fontSize: 20, paddingBottom: 7 }}>
            Phone Number :{" "}
          </Text>
          <Text style={{ fontSize: 20, paddingBottom: 7 }}>Place : </Text>
          <Text style={{ fontSize: 20, paddingBottom: 7 }}>Location : </Text>
        </View>
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
          <Entypo name="book" size={33} color="#fff" />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}> My Booking</Text>
        </Button>
        <Button
          size="lg"
          colorScheme="green"
          margin={2}
          width={150}
          marginTop={33}
          marginLeft={15}
          borderRadius={18}
        >
          <MaterialCommunityIcons name="logout" size={40} color="#fff" />
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>LOG OUT</Text>
        </Button>
      </View>
    </ScrollView>
    <FooterUser navigation={navigation} />

   </View>
  );
}

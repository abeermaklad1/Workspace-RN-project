import { Center, Text, View, Image, Heading } from "native-base";
import React from "react";

export default function PlaceInfo() {
  return (
    <View
      style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
    >
        <Heading style={{marginBottom:20, flex:.1}}>Name Of Place</Heading>
      <Center>
      <Image
              source={require("../Imgs/1.jpg")}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
      </Center>
      <Text style={{padding:12, marginTop:15, fontSize:14}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets
      </Text>
    </View>
  );
}

import React from "react";
import { NativeBaseProvider, Text, View, Image } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "react-native-vector-icons";

export default function PlaceDetail({ navigation }) {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 10 }}>
        <View style={{ flex: 4, backgroundColor: "#7986cb" }}>
          <View
            style={{
              flex: 1,
              textAlign: "start",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("");
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20, padding: 20 }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 5, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../Imgs/workspace3.jpg")}
              style={{ width: 500, height: 330, borderRadius: 100 }}
            />
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: "#A5A5A9",
                  margin: 5,
                }}
              ></View>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  margin: 5,
                }}
              ></View>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  margin: 5,
                }}
              ></View>
            </View>
          </View>
        </View>

        <View style={{ flex: 6, backgroundColor: "#fff" }}>
          <View
            style={{
              flex: 4,
              alignItems: "center",
              paddingHorizontal: 50,
              paddingTop: 20,
            }}
          >
            <Text
              style={{
                padding: 10,
                textAlign: "center",
                fontSize: 19,
                color: "#7986cb",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              et, ducimus quos exercitationem dolore voluptas autem rem veniam,
              id voluptate est facilis error accusamus illo eveniet laudantium
              omnis! Est, ad!
            </Text>
          </View>
          <View style={styles.contain}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.logoText}>View my guests</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.logoText}>Edit place</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#467599',
    padding: 8,
    textAlign: "center",
    marginTop: 50,
  },

  logoText: {
    fontSize: 17,
    color: "#7986cb",
    fontWeight: "bold",
  },
  btn: {
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
    padding: 18,
    borderColor: "#7986cb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
});

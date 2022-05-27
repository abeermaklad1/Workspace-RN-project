import React from "react";
// import { NativeBaseProvider, Text, View, Image } from "native-base";
// import { TouchableOpacity } from 'react-native';
import { FontAwesome } from "react-native-vector-icons";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Cards from "../common/Cards";

export default function Home({ navigation }) {
  return (
    // <NativeBaseProvider>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.LogoStyle}>
          <Text style={styles.logo}>Logo</Text>
        </View>
        <View style={styles.searchContainer}>
          <Text style={styles.header}>Discover Workspaces</Text>

          <View style={styles.searchStyle}>
            <FontAwesome
              name="search"
              size={30}
              color="#7986cb"
              style={styles.icon}
            />
            <TextInput style={styles.input} placeholder="Search" />
            {/* <FontAwesome name="filter" size={40} color="#7986cb" /> */}
          </View>
        </View>
        {/* //Card */}
        <Text style={styles.secondaryHeader}>Best Offers</Text>

        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.offer}>
            <View style={styles.card}>
              <Image
                source={require("../Imgs/welcome.svg")}
                style={{ width: 155, height: 130, borderRadius: 10 }}
              />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                iure.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.offer}>
            <View style={styles.card}>
              <Image
                source={require("../Imgs/welcome.svg")}
                style={{ width: 160, height: 130, borderRadius: 10 }}
              />
              <Text style={styles.cardText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                iure.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.offer}>
            <View style={styles.card}>
              <Image
                source={require("../Imgs/welcome.svg")}
                style={{ width: 150, height: 110, borderRadius: 10 }}
              />
              <Text style={styles.cardText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                iure.
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* //Card */}
        <Text style={styles.secondaryHeader}>Nearest Places</Text>
        <TouchableOpacity
          onPress={() => {
            // this.navigation.navigate('WorkSpaceDetailes')
          }}
          style={{ flex: 1, margin: 10 }}
        >
          <Cards />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // this.navigation.navigate('WorkSpaceDetailes')
          }}
          style={{ flex: 1, margin: 10 }}
        >
          <Cards />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          // this.navigation.navigate('WorkSpaceDetailes')
        }}
        style={{ flex: 1, margin: 10 }}
      >
        <Cards />
      </TouchableOpacity>
      <View style={styles.footerStyle}>
        <Text style={styles.logo}>Footer</Text>
      </View>
    </ScrollView>

    // </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#467599",
    // padding: 40,
    textAlign: "center",
  },
  LogoStyle: {
    //   flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7986cb",
    width: "100%",
    height: "7%",
    //   justifyContent: "space-between",
    //   alignItems: "flex-start",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginTop: 40,
    fontWeight: "700",
    fontSize: 18,
  },
  header: {
    marginTop: 10,
    fontWeight: "700",
    fontSize: 18,
    color: "#7986cb",
  },
  secondaryHeader: {
    margin: 10,
    fontWeight: "700",
    fontSize: 16,
    color: "#3D3F40",
    // color: "#7986cb",
  },
  input: {
    width: 270,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  searchStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    //   borderColor: '#7986cb',
    //   borderRadius: 10,
    width: 350,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  icon: {
    marginTop: 10,
  },
  offer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cardContainer: {
    flexDirection: "row",
    //   width: 500,
    //   height: 220,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    width: 190,
    height: 210,
    margin: 10,
    borderRadius: 10,
    //   padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardText: {
    padding: 5,
  },
  footerStyle: {
    //   flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7986cb",
    width: "100%",
    height: 100,
    //   justifyContent: "space-between",
    //   alignItems: "flex-start",
  },
});

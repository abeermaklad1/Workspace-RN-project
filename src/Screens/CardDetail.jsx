import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Entypo, AntDesign } from "react-native-vector-icons";


export default function CardDetail ({navigation}) {
  return (
    <View >
      <Image source={require('../Imgs/welcome.svg')} style={styles.imgLogo}/>
     
      <View style={styles.textContainer}>
          <Text style={styles.title}>Workspace 1</Text>
          <View style={styles.searchStyle}>
          <Entypo name="location-pin" size={30} color="#7986cb" style={styles.icon}/>
          <Text>Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678</Text>    

      </View>
      <View style={{flexDirection: 'row'}}>
          <Entypo name="star" size={20} color="#7986cb" style={styles.icon}/>
          <Entypo name="star" size={20} color="#7986cb" style={styles.icon}/>
          <Entypo name="star" size={20} color="#7986cb" style={styles.icon}/>
          <Entypo name="star" size={20} color="#7986cb" style={styles.icon}/>

      </View>
      <Text style={styles.title}>Details</Text>

          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry dummy text of the printing and typesetting industry.
          </Text>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry dummy text of the printing and typesetting industry.
          </Text>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry dummy text of the printing and typesetting industry.
          </Text>
      </View>

       
     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#467599',
    padding: 8,
    textAlign: 'center',

  },
 
  imgLogo: {
    width: "100%",
    height: 300,
    // borderRadius: '50%',

  },
  textContainer: {
    padding: 20
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
    color: '#467599',
    marginBottom: 10,
    textAlign: 'center'

  },
  text: {
      marginBottom: 10,
      color: '#444'
  },
  searchStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
      marginTop: 10
  },
  
});

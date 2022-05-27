import React from "react";
import { NativeBaseProvider } from "native-base";
import Splash from './src/Screens/Splash'
import IntroOne from "./src/Screens/IntroOne";
import IntroTwo from "./src/Screens/IntroTwo";
import IntroThree from "./src/Screens/IntroThree";
import ChoosingType from "./src/Screens/ChoosingType";
import Login from "./src/Screens/Login";
import SignUp from "./src/Screens/SignUp";
import Home from "./src/Screens/Home";
import CardDetail from "./src/Screens/CardDetail";
import Booking from "./src/Screens/Booking";
import Calender from "./src/Screens/Calender";
import Success from "./src/Screens/Success";
import UserHome from "./src/Screens/UserHome";
import SuccessOwner from "./src/Screens/SuccessOwner";
import PlaceDetail from "./src/Screens/PlaceDetail";
import OwnerHome from "./src/Screens/OwnerHome";
import Governorate from "./src/Screens/Governorate";
import WorkSpace from "./src/Screens/WorkSpace";
import WorkSpaceDetailes from "./src/Screens/WorkSpaceDetailes";
import Map from "./src/Screens/Map";
import ProfileUser from "./src/Screens/ProfileUser";
import ViewBooking from "./src/Screens/ViewBooking";
import LoginReactHook from "./src/Screens/LoginReactHook";
import OwnerSignUp from "./src/Screens/OwnerSignUp";

import Form from "./src/Screens/Form";

// import Maps from "./src/Screens/Maps";
//import History from "./src/Screens/History";
//import PlaceInfo from "./src/Screens/PlaceInfo";
//import Profile from "./src/Screens/Profile";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NativeBaseProvider>
      {/* <Form />  */}
      <WorkSpaceDetailes /> 

      {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="IntroOne" component={IntroOne} options={{headerShown: false}}/>
        <Stack.Screen name="IntroTwo" component={IntroTwo} options={{headerShown: false}}/>
        <Stack.Screen name="IntroThree" component={IntroThree} options={{headerShown: false}}/>
        <Stack.Screen name="ChoosingType" component={ChoosingType} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="UserHome" component={UserHome} options={{headerShown: false}}/>
        <Stack.Screen name="WorkSpace" component={WorkSpace} options={{headerShown: false}}/>
        <Stack.Screen name="WorkSpaceDetailes" component={WorkSpaceDetailes} options={{headerShown: false}}/>
        <Stack.Screen name="Booking" component={Booking} options={{headerShown: false}}/>
        <Stack.Screen name="Map" component={Map} options={{headerShown: false}}/>
        <Stack.Screen name="ProfileUser" component={ProfileUser} options={{headerShown: false}}/>
        <Stack.Screen name="Governorate" component={Governorate} options={{headerShown: false}}/>
        <Stack.Screen name="Success" component={Success} options={{headerShown: false}}/>
        <Stack.Screen name="ViewBooking" component={ViewBooking} options={{headerShown: false}}/>

      </Stack.Navigator>
      </NavigationContainer> */}
   </NativeBaseProvider>
  );
}
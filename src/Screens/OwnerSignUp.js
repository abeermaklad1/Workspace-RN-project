import React from "react";
import { NativeBaseProvider, Text, View, Image, Input, Stack, Icon, FormControl, VStack, Box, Center, HStack, Checkbox } from "native-base";
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { TextInput, Alert, StyleSheet, Button } from "react-native";

export default function OwnerSignUp() {

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          password: "",
          email: "",
          fullName: "",
          workspaceName: '',
          phone: "",
        },
      });
      const onSubmit = (data) => console.log(data);

    return (
        <NativeBaseProvider>
            <View style={{ flex: 12, alignItems: "center", justifyContent: "center" }}>
                {/* image */}
                <View style={{ flex: 3, justifyContent: "center" }}>
                    {/* <Image source={require('../Imgs/profile-pic.jpeg')} style={{ width: 120, height: 120, borderRadius: 120 }} /> */}
                </View>
                {/* Form */}
                <View style={{ flex: 7, justifyContent: "center", width: "100%" }}>
                    {/* <Example /> */}
                    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.btn}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your fullName"
          />
        )}
        name="fullName"
      />
      {errors.fullName && (
        <Text style={styles.errorText}>This is required.</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.btn}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter Workspace Name"
          />
        )}
        name="workspaceName"
      />
      {errors.workspaceName && (
        <Text style={styles.errorText}>This is required.</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.btn}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter Phone"
          />
        )}
        name="phone"
      />
      {errors.phone && <Text style={styles.errorText}>Invalid phone</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^([a-z0-9_\.]{3,15})@([a-z]{4,7})\.([a-z]{2,5})/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="email" />}
                size={6}
                type="email"
                ml="2"
                color="muted.400"
              />
            }
            style={styles.btn}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter email"
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.errorText}>Not valid email</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 8,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.btn}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter password"
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>Can't less than 8</Text>
      )}
      

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
      
    </View>
    <View style={{ flexDirection: "row", margin:50, flex: 10, width: "75%", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flex: 4 }}>
                    <Input size="2xl" type="file" InputLeftElement={<Icon as={<MaterialIcons name="add" />} size={5} mr="1" color="#fff" />} backgroundColor="#7986cb" mr="2" color="#fff" value="Images" />
                </View>
                <View style={{ flex: 4 }}>
                    <Text style={{ fontSize: 20, color: "#7986cb", ml: "3" }} > pending
                        <Checkbox value="test" ml={"3"} accessibilityLabel="This is a dummy checkbox" />
                    </Text>
                </View>
            </View>
                </View>
                {/* submit */}
                <View style={{ flex: 2, width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={{ backgroundColor: "#7986cb", width: "75%", paddingVertical: 10, borderRadius: 5 }}
                        // onPress={() => {
                        //     // this.navigation.navigate('ChoosingType')
                        // }}
                        onPress={handleSubmit(onSubmit)}
                        >
                        <Text style={{ textAlign: "center", fontSize: 20, color: "#fff", fontWeight: "bold" }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </NativeBaseProvider>
    );
}


const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: '#467599',
      padding: 8,
      textAlign: "center",
      marginTop: 50,
    },
  
    errorText: {
      fontSize: 16,
      color: "red",
      fontWeight: "bold",
    },
    btn: {
      borderWidth: 2,
      borderRadius: 8,
      width: "100%",
      padding: 7,
      borderColor: "#7986cb",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 6,
    },
  });
  
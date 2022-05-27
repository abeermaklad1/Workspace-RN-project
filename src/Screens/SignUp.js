import React from "react";
import {
  NativeBaseProvider,
  Text,
  View,
  Image,
  Input,
  FormControl,
  VStack,
  Box,
  Center,
  HStack,
  Checkbox,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextInput, Alert, StyleSheet, Button } from "react-native";

export default function SignUp({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      email: "",
      fullName: "",
      phone: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <NativeBaseProvider>
      <View
        style={{ flex: 10, alignItems: "center", justifyContent: "center" }}
      >
        {/* image */}
        <View style={{ flex: 2, justifyContent: "center" }}>
          {/* <Image source={require('../Imgs/profile-pic.jpeg')} style={{ width: 100, height: 100, borderRadius: 100 }} /> */}
        </View>

        <View style={{ flex: 4, justifyContent: "center", width: "100%" }}>
          <View style={styles.container}>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern: /^[a-zA-Z]*$/,
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
                pattern: /^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.btn}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Enter your Phone"
                />
              )}
              name="phone"
            />
            {errors.phone && (
              <Text style={styles.errorText}>Invalid phone</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
                pattern: /^([a-z0-9_\.]{3,15})@([a-z]{4,7})\.([a-z]{2,5})/,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.btn}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Enter your email"
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.errorText}>Not valid email</Text>
            )}

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
                  placeholder="Enter your password"
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={styles.errorText}>
                Password must be larger than 8
              </Text>
            )}
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
                  placeholder="Confirm password"
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={styles.errorText}>Password not matched</Text>
            )}

            {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={{ margin: 30 }}
            >
              <View
                style={{
                  backgroundColor: "#7986cb",
                  width: 250,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 26,
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 2 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: 18, textAlign: "center", color: "#A5A5A9" }}
            >
              Have account!?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ChoosingType");
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#7986cb",
                  fontWeight: "bold",
                  paddingLeft: 10,
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
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

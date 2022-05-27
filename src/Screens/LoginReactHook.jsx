import React from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {
  NativeBaseProvider,
  Modal,
  VStack,
  FormControl,
  Icon,
  Image,
  Input,
  Stack,
  Center,
  HStack,
  Checkbox,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function LoginReactHook() {
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
            placeholder="Enter your Phone"
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
            placeholder="Enter your email"
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
            placeholder="Enter your password"
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>Password must be larger than 8</Text>
      )}
      

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
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

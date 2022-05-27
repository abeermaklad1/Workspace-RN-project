import React, { useState } from "react";
import { NativeBaseProvider, Modal, Button, VStack, FormControl, Text, View, Icon, Image, Input, Stack, Center, HStack, Checkbox } from "native-base";
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import {  TextInput, Alert, StyleSheet } from "react-native";



export default function Login() {

    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState();
    const [password, setPassword] = useState();
    const [passwordError, setPasswordError] = useState();
    const logInValidate = () => {
        const regEx = /^([a-z0-9_\.]{3,15})@([a-z]{4,7})\.([a-z]{2,5})/;
        // if (!regEx.test(email) && email != '') {
        //     setEmailError('Hey! please Enter Vaild Email');
        //     setPasswordError('Hey! please Enter Vaild Password');
        // }
        // else {
        //     setEmailError('Hey! Your email');
        //     setPasswordError('Your password pty');
        // }
        if (email != '' && password != '' && !regEx.test(email)) {
            setEmailError('Hey! please Enter your Email');
            setPasswordError('Hey! please Enter your Password');
        } else {
            setEmailError();
            setPasswordError();
        }
    }
    const handelOnChange = (e) => {
        setEmail(e.value);
    }
    const Example = () => {
        const [show, setShow] = useState(false);
        const { control, handleSubmit, formState: { errors } } = useForm({
            defaultValues: {
              
              password: '',
              email: '',
            }
          });
          const onSubmit = data => console.log(data);

        return <Stack space={4} w="100%" alignItems="center">
            {/* <FormControl >
                <Input size="2xl" w="100%"
                    InputLeftElement={<Icon as={<MaterialIcons name="email" />}
                        size={6} type="email" ml="2" color="muted.400" />}
                    placeholder="Email"
                    value={email}
                    // onChangeText={(anything) => { setEmail(anything) }}
                    onChangeText={() => setEmailError('')}
                />
                <Text style={{ width: '100%', color: "red" }}>{emailError} </Text>
            </FormControl> */}
            <Controller
        control={control}
        rules={{
         required: true,
         pattern: /^([a-z0-9_\.]{3,15})@([a-z]{4,7})\.([a-z]{2,5})/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            InputLeftElement={<Icon as={<MaterialIcons name="email" />}
            size={6} type="email" ml="2" color="muted.400" />}
            style={styles.btn}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Enter your email'

          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.errorText}>Not valid email</Text>}

            {/* <FormControl>
                <Input size="2xl" w="100%"
                    type={show ? "text" : "password"}
                    InputRightElement={<Icon size={5} as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                        mr="2" color="muted.400" onPress={() => setShow(!show)} />}
                    placeholder="Password"
                    value={password}
                    onChangeText={() => setPasswordError('')}
                />
                <Text style={{ width: '100%', color: "red" }}>{passwordError} </Text>
            </FormControl> */}
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
            placeholder='Enter your password'

          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorText}>Password must be larger than 8</Text>}

        </Stack>;
    };

    const Remember = () => {
        return <HStack space={6}>
            <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
        </HStack>;
    };

    const Example2 = () => {
        const [modalVisible, setModalVisible] = React.useState(false);

        return <>
            <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="center" size="lg">
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Forgot Password?</Modal.Header>
                    <Modal.Body>
                        Enter email address and we'll send a link to reset your password.
                        <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                    </Modal.Body>
                 
                        <TouchableOpacity style={{ marginHorizontal:'auto' ,marginVertical:20}} flex="1" onPress={() => {
                            setModalVisible(false);
                        }}>
                            <View style={{ backgroundColor: "#7986cb", width: 250, paddingVertical:5 , borderRadius: 5 }}>
                                <Text style={{ textAlign: "center", fontSize: 20, color: "#fff", fontWeight: "bold" }}>Send Email</Text>
                            </View>
                        </TouchableOpacity>

                </Modal.Content>
            </Modal>
            <VStack space={8} alignItems="center">
                <Text style={{ backgroundColor: '#fff', color: "red", fontSize: 16 }} onPress={() => {
                    setModalVisible(!modalVisible);
                }}>
                    Forgot Password!
                </Text>
            </VStack>
        </>;
    }

    const [show, setShow] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          
          password: '',
          email: '',
        }
      });
      const onSubmit = data => console.log(data);

    return (
        <NativeBaseProvider>
            <View style={{ flex: 8, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flex: 2, justifyContent: "flex-end" }}>
                    {/* <Image source={require('./Imgs/download.jpeg')} style={{ width: 100, height: 100, borderRadius: 100 }} /> */}
                </View>

                <View style={{ flex: 3, justifyContent: "center" }}>
                    {/* <Example /> */}
                    <View style={styles.container}>
      
      <Controller
        control={control}
        rules={{
         required: true,
         pattern: /^([a-z0-9_\.]{3,15})@([a-z]{4,7})\.([a-z]{2,5})/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            InputLeftElement={<Icon as={<MaterialIcons name="email" />}
            size={6} type="email" ml="2" color="muted.400" />}
            style={styles.btn}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Enter your email'

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
            type={password}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Enter your password'

          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorText}>Password must be larger than 8</Text>}

      

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                        <Remember />
                        <Text style={{ fontSize: 18, textAlign: "center", color: "#A5A5A9", paddingLeft: 5 }}>Remember me!!</Text>
                        <TouchableOpacity onPress={() => {
                            // this.navigation.navigate()
                        }}>
                            <Text style={{ fontSize: 18, color: "red", paddingLeft: 20 }}><Example2 /></Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 3 }}>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)}  style={{ margin: 30 }}>
                        <View style={{ backgroundColor: "#7986cb", width: 250, paddingVertical: 10, borderRadius: 5 }}>
                            <Text style={{ textAlign: "center", fontSize: 26, color: "#fff", fontWeight: "bold" }}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, textAlign: "center", color: "#A5A5A9" }}>Don't have account!?</Text>
                        <TouchableOpacity onPress={() => {
                            // this.navigation.navigate('ChoosingType')
                        }}>
                            <Text style={{ fontSize: 20, color: "#7986cb", fontWeight: "bold", paddingLeft: 10 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </NativeBaseProvider>
    );
}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#467599',
      padding: 8,
      textAlign: 'center',
      marginTop: 50
  
    },
   
    errorText: {
      fontSize: 16,
      color: 'red',
      fontWeight: 'bold'
    },
    btn: {
      borderWidth: 2,
      borderRadius: 10,
      width: "90%",
      padding: 7,
      borderColor: '#7986cb',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
    },
    
  });
  
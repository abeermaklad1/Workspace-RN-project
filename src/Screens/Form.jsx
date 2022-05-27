import React from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function Form() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      phone: '',
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
         required: true,
         pattern: /^[a-zA-Z]*$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.btn}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Enter your first name'
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text style={styles.errorText}>This is required.</Text>}

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
            placeholder='Enter your last name'

          />
        )}
        name="lastName"
      />
      {errors.lastName && <Text style={styles.errorText}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         required: true,
         pattern: /^([a-z0-9_\.]{3,15})@([a-z]{4,7})\.([a-z]{2,5})/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
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
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Enter your email'

          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorText}>Password must be larger than 8</Text>}

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
            placeholder='Enter your Phone'

          />
        )}
        name="phone"
      />
      {errors.phone && <Text style={styles.errorText}>Invalid phone</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
    width: 300,
    padding: 10,
    borderColor: '#7986cb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  
});

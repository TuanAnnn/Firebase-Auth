import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import Ctextinput from "../Component/Ctextinput";
import Cbutton from "../Component/Cbutton";
import CtextInputButton from "../Component/CtextInputButton";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        {/* <TextInput
        placeholder='Email'
        // value={}
        // onChangeText={text=>}
        style={styles.input}
        >   
        </TextInput> */}
        <Ctextinput title='User name' placeholder="Enter Email ..."></Ctextinput>
        <Ctextinput title='Password' placeholder="Enter Password ..." secureTextEntry></Ctextinput>
        <Cbutton title='Login'></Cbutton>
        <CtextInputButton></CtextInputButton>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputContainer: {},
});

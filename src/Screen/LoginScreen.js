import {
    Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Ctextinput from "../Component/Ctextinput";
import Cbutton from "../Component/Cbutton";
import CtextInputButton from "../Component/CtextInputButton";

const LoginScreen = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Ctextinput
          title="User name"
          placeholder="Enter Email ..."
          value={user}
          onChangeText={value=>setUser(value)}
        ></Ctextinput>
        <Ctextinput
          title="Password"
          placeholder="Enter Password ..."
          secureTextEntry
          value={pass}
          onChangeText={value=>setPass(value)}
        ></Ctextinput>
        <Cbutton onPress={()=>Alert.alert(user,pass)} title="Login"></Cbutton>
        <Cbutton title="gi do"></Cbutton>
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

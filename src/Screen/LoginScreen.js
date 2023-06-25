import {
    Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ctextinput from "../Component/Ctextinput";
import Cbutton from "../Component/Cbutton";
import CtextInputButton from "../Component/CtextInputButton";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigation = useNavigation()
  useEffect(()=>{
    const unsubcribe = auth.onAuthStateChanged(user =>{
      if(user){
        navigation.navigate("HomeScreen")
      }
    })
    return unsubcribe
  },[])
  const handleSignUp = () =>{
    auth
    .createUserWithEmailAndPassword(email,pass)
    .then(userCredentials => {
      const user = userCredentials.user
      console.log(user.email)
    })
    .catch(e=>alert(e.message))
  }
  const handleLogin = ()=>{
    auth
    .signInWithEmailAndPassword(email,pass)
    .then(userCredentials => {
      const user = userCredentials.user
      console.log(user.email)
    })
    .catch(e=>alert(e.message))
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Ctextinput
          title="User name"
          placeholder="Enter Email ..."
          value={email}
          onChangeText={value=>setEmail(value)}
        ></Ctextinput>
        <Ctextinput
          title="Password"
          placeholder="Enter Password ..."
          secureTextEntry
          value={pass}
          onChangeText={value=>setPass(value)}
        ></Ctextinput>
        <Cbutton onPress={handleLogin} title="Login"></Cbutton>
        <Cbutton onPress={handleSignUp} title="SignUp"></Cbutton>
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

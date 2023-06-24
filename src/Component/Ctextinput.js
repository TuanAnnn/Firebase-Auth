import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Ctextinput = ({ title, placeholder, secureTextEntry, value,onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
     <View style={styles.inputContainer}>
     <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
     </View>
    </View>
  );
};

export default Ctextinput;

const styles = StyleSheet.create({
    container:{
        marginTop:15
    },
    inputContainer: {
        borderRadius:12,
        borderWidth:0.5,
        width:320,
        height: 45,
        justifyContent:'center',
        padding:10
    },
    text:{
        marginBottom:10,
        marginLeft:10
    }
});

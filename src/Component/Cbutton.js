import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Cbutton = ({title,onPress,backgroundColor}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.btnLogin}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Cbutton

const styles = StyleSheet.create({
    btnLogin:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        backgroundColor:'blue',
        marginTop:20,
        borderRadius:12,
        marginHorizontal:100
    },
    text:{
        color:'white',
        fontSize:16
    }
})
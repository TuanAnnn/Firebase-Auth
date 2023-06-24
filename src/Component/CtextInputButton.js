import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CtextInputButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Register ?</Text>
    </TouchableOpacity>
  )
}

export default CtextInputButton

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:15
    },
    text:{
        fontSize:14,
        color:'blue'
    }
})
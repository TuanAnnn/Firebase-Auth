import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import Cbutton from '../Component/Cbutton'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  const handleSignoOut = ()=>{
    auth
    .signOut()
    .then(()=>{
      navigation.replace('LoginScreen')
    })
    .catch(e => Alert.alert(e.message))
  }



  return (
    <View style={styles.container}>
      <View style={styles.textemail}>
      <Text>Email: {auth.currentUser?.email}</Text>
      </View>
      <Cbutton title='Sign Out' onPress={handleSignoOut}></Cbutton>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
  textemail:{
    justifyContent:'center',
    alignItems:'center'
  }
})
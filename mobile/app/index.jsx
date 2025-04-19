import { Text, View, StyleSheet, Image, Button, Touchable, TouchableOpacity } from "react-native";
import {useAuthStore} from "../store/authStore";
import { useEffect } from "react";
import { Link } from "expo-router";
import edu from '../assets/images/R.png'
import { router } from "expo-router";

export default function Index() {

  const {token, user, checkAuth, logout} = useAuthStore()
  console.log("Token", token)

  const handleSignUp = () => {
    router.push('/(auth)/SignUp')
  }

  useEffect(() => {
    checkAuth()
  },[])


  
  return (
    <View style={style.container}>

      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>E-Learning</Text>
      </View>

     <View>
      <Image source={edu} style={{width: 300, height: 300,marginBottom: 30}} />
      <TouchableOpacity 
  style={{
    marginTop: 50,
    backgroundColor: "black",
    borderRadius: 30,
    width: 170,
    alignSelf: "center", // Instead of margin: 'auto'
  }}
  onPress={handleSignUp}
>
  <Text style={{ textAlign: "center", padding: 10, color: "white", fontWeight: "bold", fontSize: 18 }}>
    SignUp
  </Text>
</TouchableOpacity>
     </View>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  }
})
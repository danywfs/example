import * as React from "react";
import { AuthContext,AuthProvider } from "../context/AuthContext";

import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Dimensions, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Tarjetas from "../const/Tarjetas";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = ({ userToken,setUserToken }) => {
 // const { userToken } = React.useContext(AuthContext);
 const [user, setUser] = React.useState('');
 const [password, setPassword] = React.useState('');
 const [numero, setNumero] = React.useState('');
 const BASE_URL="https://api.taecel.com"
 const login="/api/login"
 const confirmCode =async () => {
    var response= await fetch(new Request(BASE_URL+login, {
        method: "post",
        headers: {
          
        },
        body: JSON.stringify({usuario:user,password:password,numero:numero})
      })).catch(function (error) {
        console.log("error")
        return false
      });
      //alert(JSON.stringify( await response?.json()))
      //  return response
      setUserToken('')

 }
 const cerrar = () => {
    setUserToken('s')
 }
  return (
    <SafeAreaView style={{ flex:1,justifyContent:"center", alignContent:"center", alignItems:"center"  }}>
        <Text></Text>
        <Text></Text>
        <Tarjetas contracts={{datos:"hola"}}  />
        
          </SafeAreaView>

  );
}
/**
 * <TouchableOpacity style={styles.lOGINPressable}
                    onPress={confirmCode}
                >
                <Text style={styles.entrarText}>cerrar sesion</Text>
          </TouchableOpacity>    
 */
const styles = StyleSheet.create({
    lOGINPressable: {
        position: 'absolute',
        top: '85%',
        borderRadius: 50,
        backgroundColor: "#4aa598",
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        height: '7%',

      },
      entrarText: {
        fontSize: 17,
        lineHeight: 40,
        fontWeight: "500",
        color: "white",
        textAlign: 'center',
      },
});

export default Home;

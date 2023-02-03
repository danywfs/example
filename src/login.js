import * as React from "react";
import axios from 'axios';


import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Dimensions, ScrollView, SafeAreaView, StatusBar } from "react-native";
const Login = ({ setUserToken }) => {

  //const {userToken, setUserToken } = this.props

  const [user, setUser] = React.useState('margarita.desiteg');
  const [password, setPassword] = React.useState('Marg.123');
  const [numero, setNumero] = React.useState('4424084527');
  const BASE_URL = "https://api.taecel.com"
  const login = "/api/login"

  const confirmCode = async () => {
    var qs = require('qs');
    var data = qs.stringify({
      'uid': numero,
      'user': user,
      'pass': password,
      'via': '14',
      'imei': '',
      'name': '',
    });
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.taecel.com/api/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'cksid=1bf127056d3599cb1cf4a222065ed8be-88R06cM44zYdZuw7z227-snFjbH9dD4oM8gN7AFew5359d; cookch=1bf127056d3599cb1cf4a222065ed8be-I6bj257zGx5EdV4KjJSs-B682dklq7m9sCJpvhfae4sjSE'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.validate) {
          //alert(response.data.key)
          setUserToken(response.data.key)
        }
        else {
          alert(response.data.message)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    //alert(JSON.stringify(result ))

    //  return response
  }
  return (
    <SafeAreaView style={{
      flex: 1, justifyContent: "center", alignContent: "center", alignItems: "center"

    }}>
      <View style={{
        width: "95%",
        borderWidth: 5,
        borderRadius: 20,
        alignItems: "center",
        borderColor: "#B1AFAF"
      }}>
        <Image source={require('../assets/hospital.jpg')} style={{ margin: 15, width: "50%" }}></Image>

        <View style={{ flexDirection: "row", margin: 10, justifyContent: "center", alignContent: "center", alignItems: "center" }}>

          <Text style={[ { width: "20%" }]}>Usuario</Text>
          <TextInput placeholder="Usuario"
            style={{ borderWidth: 1, width: "60%", padding: 5 }}
            placeholderTextColor={"#097679"}
            fontSize={20}
            secureTextEntry={false}
            returnKeyType="done"
            value={user}
            onChangeText={setUser}
            autoCapitalize='none' />
        </View>
        <View style={{ flexDirection: "row", margin: 10, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
          <Text style={[ { width: "20%" }]}>password</Text>
          <TextInput placeholder="Password"
            style={{ borderWidth: 1, width: "60%", padding: 5 }}
            placeholderTextColor={"#097679"}
            fontSize={20}
            secureTextEntry={false}
            returnKeyType="done"
            value={password}
            onChangeText={setPassword}
            autoCapitalize='none' />
        </View>
        <View style={{ flexDirection: "row", margin: 10, justifyContent: "center", alignContent: "center", alignItems: "center" }}>

          <Text style={[ { width: "20%" }]}>numero</Text>
          <TextInput placeholder="Numero"
            style={{ borderWidth: 1, width: "60%", padding: 5 }}
            placeholderTextColor={"#097679"}
            fontSize={20}
            secureTextEntry={false}
            returnKeyType="done"
            value={numero}
            onChangeText={setNumero}
            keyboardType='number-pad'
            autoCapitalize='none' />
        </View>

        <TouchableOpacity style={styles.lOGINPressable}
          onPress={confirmCode}
        >
          <Text style={styles.entrarText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  lOGINPressable: {
    borderRadius: 50,
    backgroundColor: "#4aa598",
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  entrarText: {
    fontSize: 17,
    lineHeight: 40,
    fontWeight: "500",
    color: "white",
    textAlign: 'center',
  },
});

export default Login;

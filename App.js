import * as React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./src/home"
import Login from "./src/login"
import { Table, Row, Rows } from 'react-native-table-component';

import {

  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MapView from 'react-native-maps';

import { StatusBar } from 'expo-status-bar';
import { AuthContext, AuthProvider } from './context/AuthContext';
function Informacion({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Acerca de nosotros  </Text>
      <Text>En CLINICA HOSPITAL SAN ANTONIO, nos dedicamos a brindarles a nuestros clientes un servicio cordial. Valoramos su negocio. Nuestra misión es ofrecer productos y servicios confiables con un enfoque orientado al cliente.

        Nuestro equipo atento y profesional puede brindar una variedad de servicios para satisfacer sus requisitos.

        Para obtener más información acerca de CLINICA HOSPITAL SAN ANTONIO, y los productos y servicios que podemos ofrecer, llámenos al 52-448-2780450.</Text>

    </View>
  );
}
function Contacto({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Acerca de nosotros  </Text>
      <Text>CALLE CUARTO CENTENARIO #636 COLONIA CENTRO
        AMEALCO, QUERETARO 76850
        52-448-2780450</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

function Enfermedadess({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Acerca de nosotros  </Text>
      <Text>En CLINICA HOSPITAL SAN ANTONIO, nos dedicamos a brindarles a nuestros clientes un servicio cordial. Valoramos su negocio. Nuestra misión es ofrecer productos y servicios confiables con un enfoque orientado al cliente.

        Nuestro equipo atento y profesional puede brindar una variedad de servicios para satisfacer sus requisitos.

        Para obtener más información acerca de CLINICA HOSPITAL SAN ANTONIO, y los productos y servicios que podemos ofrecer, llámenos al 52-448-2780450.</Text>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Open Drawer</Text>
      </Pressable>
    </View>
  );
}
function Enfermedades({ navigation }) {
  const tableData = [
    ['1', '2', <Pressable onPress={() => navigation.navigate('Descripcion',{id:1})} style={{ padding: 10, marginBottom: 10, marginTop: 10,backgroundColor:"#F0F" }}>
      <Text>Ver Mas</Text>
    </Pressable>],
    ['1', '2', <Pressable onPress={() => navigation.navigate('Descripcion',{id:2})} style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
    <Text>Ver Mas</Text>
  </Pressable>],
    ['1', '2', <Pressable onPress={() => navigation.navigate('Descripcion',{id:3})} style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
    <Text>Ver Mas</Text>
  </Pressable>],
   ['1', '2', <Pressable onPress={() => navigation.navigate('Descripcion',{id:4})} style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
   <Text>Ver Mas</Text>
 </Pressable>],
  ]
  const tableHead = ['nombre', 'descripción,', '']
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Acerca de nosotros  </Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={{ width: "90%" }} >
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
}
function Descripcion({ navigation,id }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>{id}</Text>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Go to Story</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Open Drawer</Text>
      </Pressable>
    </View>
  );
}

function Story({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Our Story</Text>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Go to Conference</Text>
      </Pressable>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Cerrar sesión" onPress={() => setUserToken('')} />
      </DrawerContentScrollView>
    );
  }
  const [userToken, setUserToken] = React.useState('');
  function Navegator({ navigation }) {
    return (
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Enfermedades" component={Enfermedades} />

          <Drawer.Screen name="Contactos y Ubicación" component={Contacto} />

          <Drawer.Screen name="Información" >
            {props => <Home userToken={userToken} setUserToken={setUserToken} />}
          </Drawer.Screen>
          <Drawer.Screen name="Descripcion" component={Descripcion} />




        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {userToken ?
        <Navegator />
        :
        <Login userToken={userToken} setUserToken={setUserToken} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '50%',
    height: '50%',
  },
});

export default App;

/**
 * import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext, AuthProvider } from './context/AuthContext';
import * as React from "react";
import Home from "./src/home"
import Login from "./src/login"

<Drawer.Screen name="Home" >
        {props => <Home userToken={userToken} setUserToken={setUserToken} />}
        </Drawer.Screen>


        <Drawer.Screen name="Login" >
          {props =>  <Login userToken={userToken} setUserToken={setUserToken} />}
        </Drawer.Screen>
        <Drawer.Screen name="Story" component={Story} />


 * return (
    <View style={styles.container}>
      {userToken !== null && userToken !== "" ?
        <Home userToken={userToken} setUserToken={setUserToken}/>:
        <Login userToken={userToken} setUserToken={setUserToken} />        
      }
      <StatusBar style="auto" />
    </View>
  );
 */
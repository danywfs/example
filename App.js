import * as React from 'react';
import { Pressable, Image, View, Linking, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Banner } from 'react-native-paper'
import Home from "./src/home"
import Login from "./src/login"
import { Table, Row, Rows } from 'react-native-table-component';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    <View style={{ width: wp('90%'), height: hp('80%'), borderRadius: 20, backgroundColor: "#FFF", padding: wp('5%'), alignItems: 'center', margin: 10, borderWidth: 2, borderColor: "#DCDBDB" }}>
      <Text style={{ fontSize: 18 }}>
        Para obtener más información acerca de CLINICA HOSPITAL SAN ANTONIO,
        y los productos y servicios que podemos ofrecer,
        llámenos al <Pressable
          onPress={() => Linking.openURL(`tel:+527773873624`)}
        >
          <Text style={{ color: "#00F", fontSize: 18 }}>52-448-2780450</Text>
        </Pressable>.
      </Text>
      <Text style={{ fontSize: 28 }}>
        Ubicación
      </Text>
      <Text>
        CALLE CUARTO CENTENARIO #636 COLONIA CENTRO
        AMEALCO, QUERETARO 76850
        52-448-2780450
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 20.184228436261947,
          longitude: -100.13902413202847,
          latitudeDelta: 0.001,
          longitudeDelta: 0,
        }}
      />
    </View>
  );
}


function Enfermedades({ navigation }) {
  const tableData = [
    ["Bronquitis aguda ", 'La bronquitis aguda, a veces también llamada resfriado de pecho, ocurre cuando las vías respiratorias en el pulmón se inflaman y producen mucosidad en los pulmones', <Pressable onPress={() => navigation.navigate('Descripcion', {
      itemId: "Bronquitis aguda\n"+
      "Causas:\n" +
        "Lo que generalmente causa la bronquitis aguda es un virus." +
        "A veces, también la puede ser causada por bacterias." +
        "Pero incluso en esos casos, los antibióticos NO están" +
        "aconsejados y no ayudarán a hacerlo sentir mejor.\n\n\n" +
        "Síntomas:\n" +
        "*Tos con o sin mucosidad" +
        "Dolor en el pecho" +
        "Cansancio(fatiga)" +
        "Dolor de cabeza leve" +
        "Dolores corporales leves" +
        "Dolor de garganta"
    })} style={styles.lOGINPressable}>
      <Text>Ver Mas</Text>
    </Pressable>],
    ["Resfriado común", '¿Tiene estornudos, congestión nasal y moqueo? Podría ser un resfriado. Los resfriados son una de las razones más frecuentes de ausencias escolares y laborales', <Pressable onPress={() => navigation.navigate('Descripcion', {
      itemId: "Resfriado común\n"+
      "Causas\n" +
        "Más de 200 virus pueden causar un resfriado," +
        "pero los rinovirus son el tipo más común." +
        "Los virus que causan los resfriados se pueden" +
        "transmitir de persona a persona a través del" +
        "aire y del contacto personal cercano.\n\n\n" +
        "Síntomas\n" +
        "Estornudos" +
        "Congestión nasal" +
        "Moqueo" +
        "Dolor de garganta" +
        "Tos" +
        "Goteo de mucosidad en la garganta (goteo posnasal) Lagrimeo" +
        "Fiebre (si bien la mayoría de las personas resfriadas no tienen fiebre)"
      })} style={styles.lOGINPressable}>
      <Text>Ver Mas</Text>
    </Pressable>],
    ["Infección de oído", 'Existen distintos tipos de infecciones de oído. La infección del oído medio (otitis media aguda) es una infección en el oído medio.', <Pressable onPress={() => navigation.navigate('Descripcion', {
      itemId: "Infección de oído\n"+
      "Causas\n" +
        "Las bacterias, como Streptococcus pneumoniae y Haemophilus influenzae (no tipificable) son las dos bacterias más comunes que causan infecciones del oído medio."+
        "Los virus, como los que causan los resfriados pueden causar infecciones del oído medio.\n\n\n"+
        "Síntomas\n"+
        "Dolor de oído"+
        "Fiebre"+
        "Nerviosismo o irritabilidad"+
        "Frotarse o jalarse una oreja"+
        "Dificultad para dormir"
      })} style={styles.lOGINPressable}>
      <Text>Ver Mas</Text>
    </Pressable>],
    ["Influenza (gripe)", 'La influenza es una enfermedad respiratoria que se propaga de persona a persona. Puede causar enfermedad moderada a grave. Las consecuencias graves de la influenza pueden llevar a la hospitalización o la muerte.', <Pressable onPress={() => navigation.navigate('Descripcion', {
      itemId: "Influenza (gripe) \n"+
      "Causas\n" +
        "La influenza es causada por un virus que se propaga de persona a persona. Cada año provoca epidemias estacionales.\n\n\n" +
        "Síntomas\n" +
        "fiebre (no todas las personas con influenza tienen fiebre)"+
        "tos"+
        "dolores corporales"+
        "dolor de garganta"+
       "moqueo o congestión nasal"+
        "dolor de cabeza"+
        "escalofríos"+
        "fatiga"+
        "algunas veces, vómitos y diarrhea"
      })} style={styles.lOGINPressable}>
      <Text>Ver Mas</Text>
    </Pressable>],
  ]
  const tableHead = ['nombre', 'descripción,', '']
  return (
    <View style={{ flex: 1, height:500,alignItems: 'center', justifyContent: 'center' }}>
      <Text>Algunas enfermedades</Text>
      <ScrollView style={{width:wp("90%")}}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={{ width: "100%" }} >
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
      </ScrollView>
    </View>
  );
}
function Descripcion({ navigation, route }) {
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>{itemId}</Text>
      <Pressable
        onPress={() => navigation.goBack() }
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>regresar</Text>
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

function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MyBanner />
      <Text style={{ fontSize: 20 }}>Bien venido a tu aplicacion de el
        HOSPITAL CLÍNICO SAN ANTONIO
      </Text>

      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Go to Conference</Text>
      </Pressable>
    </View>
  );
}
const MyBanner = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <ScrollView>
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Ocultar Banner',
            onPress: () => setVisible(false),
          },
          {
            label: 'Llamanos',
            onPress: () => Linking.openURL(`tel:+527773873624`),
          },
        ]}
        icon={({ size }) => (
          <Image
            source={{
              uri: 'https://media.licdn.com/dms/image/C560BAQFAgpayurQGnA/company-logo_200_200/0/1611770962367?e=2147483647&v=beta&t=SyfI0_rqRphgbChqi7IDbpPVYVo8EVQ9t7fo-Wxapos',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        Esperamos disfrutes tu experiencia, cualquier queja contáctanos
      </Banner>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>Bien venido a tu aplicacion de el
          HOSPITAL CLÍNICO SAN ANTONIO
        </Text>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
          <Text>Go to Conference</Text>
        </Pressable>
      </View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image style={{ width: wp('49%'), height: wp('49%') }} source={require('assets/analisis.jpg')} />
          <Image style={{ width: wp('49%'), height: wp('49%') }} source={require('assets/sala.png')} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image style={{ width: wp('49%'), height: wp('49%') }} source={require('assets/lugar.jpg')} />
          <Image style={{ width: wp('49%'), height: wp('49%') }} source={require('assets/aislado.jpg')} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image style={{ width: wp('49%'), height: wp('49%') }} source={require('assets/camas.jpg')} />
          <Image style={{ width: wp('49%'), height: wp('49%') }} source={require('assets/equipo.jpg')} />
        </View>
      </View>

    </ScrollView>
  );
};
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
          <Drawer.Screen name="Home" component={MyBanner} />
          <Drawer.Screen name="Información" >
            {props => <Home userToken={userToken} setUserToken={setUserToken} />}
          </Drawer.Screen>
          <Drawer.Screen name="Contactos y Ubicación" component={Contacto} /> 
          <Drawer.Screen name="Enfermedades" component={Enfermedades}  />
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
    width: wp('80%'),
    height: wp('80%'),
  },
  lOGINPressable: {
    borderRadius: 50,
    backgroundColor: "#4aa598",
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize:18,
    color:"#FFF"
  },
  entrarText: {
    fontSize: 17,
    lineHeight: 40,
    fontWeight: "500",
    color: "white",
    textAlign: 'center',
  },
});

export default App;

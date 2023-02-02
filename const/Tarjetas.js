import React, { useState, useContext } from "react";
import { Card, Button, Icon, View, Text, StyleSheet, Image, TouchableOpacity, BackHandler, ActivityIndicator, ScrollView } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Tarjetas extends React.Component {
  render() {
    //Llenado de la informacion traida desde el api
    const { idContrato, folio, estado, saldo, moneda, fechaInicio,
      fechaFinalizacion, diaCorte, estadoId, comprobante } = this.props.contracts



    //validacion del estado en el que se encuentre el contrato


    //formato de numero a moneda
    function currencyFormat(num) {
      return '$ ' + (num * 1).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    //estilo de las tarjetas de los contratos
    return (

      <ScrollView style={{top:30, height:hp('10%'), width:wp('100%')}} >
        <View style={{width:"100%",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
          <View style={{
            width: "90%", borderWidth: 0, borderRadius: 15, padding: 30, justifyContent: "center", alignContent: "center", alignItems: "center", shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
            <Text style={{ fontSize: 25 }}>Informacion General</Text>
            <Text style={{ fontSize: 25 }}></Text>
            <Text>
              En CLINICA HOSPITAL SAN ANTONIO, nos dedicamos a brindarles a nuestros clientes un servicio cordial. Valoramos su negocio. Nuestra misión es ofrecer productos y servicios confiables con un enfoque orientado al cliente.
            </Text>
            <Text>
              Nuestro equipo atento y profesional puede brindar una variedad de servicios para satisfacer sus requisitos.
            </Text>
            <Image source={require('../assets/hospital.jpg')}></Image>
          </View>

        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({

  card: {
    width: wp('95%'),
    flex: 1,

    alignSelf: "center",
    flexDirection: "column",
    //paddingVertical: 15,
    marginVertical: 15,
    borderWidth: 0,
    //backgroundColor: "#F00",
  },
  groupIcon1: {
    top: '-502%',
    left: '1%',
    width: wp('8%'),
    height: hp('8%'),
  },
  groupIcon2: {
    position: "absolute",
    top: '52%',
    left: '5%',
    width: 28,
    height: 28,
  },
  lineView: {
    position: "absolute",
    top: '48%',
    left: '1%',
    borderStyle: "solid",
    borderColor: "#5d759f",
    borderTopWidth: 1,
    width: '95%',
    height: '1%',
    opacity: 0.3,
  },

  iconOutlinedotsVertical: {
    position: "absolute",
    height: "8.6%",
    width: "7%",
    top: "66.31%",
    right: "4.96%",
    bottom: "25.09%",
    left: "88.05%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    opacity: 0.2,
  },
  lineView1: {

    borderStyle: "solid",
    borderColor: "#5d759f",
    borderTopWidth: 2,
    width: '100%',
    height: '1%',
    opacity: 0.3,
  },
  text1: {
    fontSize: hp('1.8%'),
    fontWeight: "600",
    color: "#5d759f",
    borderWidth: 0
  },
  text2: {
    left: '40%',
    fontSize: hp('2%'),
    fontWeight: "700",
    color: "#097679",
    textAlign: "left",
  },

  text3: {

    fontSize: hp('1.8%'),
    fontWeight: "700",
    color: "#5d759f",
    textAlign: "left",
  },

  iconOutlineclock: {
    height: hp('5%'),
    width: wp('5%'),
    top: "-50%",
    left: "0%",

  },
  iconOutlinesortDescending: {
    height: hp('5%'),
    width: wp('5%'),
    top: "-50%",
    left: "0%",
  },
  daDeCorte: {
    fontSize: hp('1.2%'),
    textTransform: "uppercase",
    fontWeight: "500",
    color: "#cca066",
    textAlign: "left",
  },
  iconOutlinesortAscending: {
    width: wp('5%'),
    height: wp('5%'),

  },
  fechaDeInicio: {
    fontSize: hp('1.0%'),
    textTransform: "uppercase",
    fontWeight: "500",
    color: "#cca066",
    textAlign: "left",
  },
  fechaDeFinalizacin: {
    top: 0,
    left: 0,
    fontSize: hp('1.2%'),
    textTransform: "uppercase",
    fontWeight: "500",
    color: "#cca066",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 10,
    left: 0,
    width: 91,
    height: 16,
  },
  groupView2: {
  },
  groupView3: {
    top: 10,
    left: 10,
    width: 38,
    height: 16,
  },
  groupView4: {
    width: '20%',
    height: '20%',
  },
  groupView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 91,
    height: 16,
  },
  groupView6: {
    position: "absolute",
    top: 10,
    left: 0,
    width: 91,
    height: 16,
  },

  groupView7: {
    width: '35%',
    height: '20%',
  },
  groupView8: {
    position: "absolute",
    top: '52%',
    left: '15%',
    width: '56%',
    height: '2%',
  },
  verDesgloseDeIntereses1: {
    top: -wp("5%"),
    paddingTop: wp("5%"),
    height: wp("19%"),
    backgroundColor: "#097679",
    shadowColor: "rgba(9, 30, 66, 0.15)",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowRadius: 28,
    elevation: 28,
    borderWidth: 0,
    borderBottomEndRadius: 10,
    flex: 1,
    flexDirection: "row",
    direction: "ltr",
    width: wp('78%'),
    //borderWidth:2,
    alignItems: "center",
    justifyContent: "center",
    //borderColor:"#FFA",
  },
  verDesgloseDeIntereses: {
    fontSize: hp('1.8%'),
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    // borderWidth:3,
  },
  icon: {
    height: wp('10%'),
    width: wp('10%'),
    // borderWidth:2,
    //borderColor:"#FAF"
  },
  bxsuserPlusIcon: {
    position: "absolute",
    top: 9,
    left: 0,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  beneficiarioText: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 8,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "SFProText",
    color: "#cca066",
    textAlign: "left",
  },
  nombreDelBeneficiario: {
    position: "absolute",
    top: 10,
    left: 21,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "SFProText",
    color: "#5d759f",
    textAlign: "left",
  },

  descargaPDF: {
    position: 'absolute',
    left: 0,


  },
  saldoText: {
    fontSize: hp('1.3 %'),
    textTransform: "uppercase",
    fontFamily: "SFProText",
    color: "#5d759f",

  },
  groupView: {
    width: "25%",
    height: hp('4.5%'),
    flexDirection: "row",
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  mXNText: {
    fontSize: hp('2%'),
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#5d759f",
    borderWidth: 0
  },
  dIVISASIcon: {
    width: hp('3.3%'),
    height: hp('3.3%'),
    borderWidth: 0,
  },

  rectangleView1: {
    height: wp("15%"),
    zIndex: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 0,
    width: '100%',
  },

  //recuadro de descarga de pdf 
  rectangleView2: {
    top: -wp("5%"),
    height: wp("19%"),
    borderBottomStartRadius: 8,
    backgroundColor: "#c6a673",
    width: '23%',
  },
  //recuadro de pintura de validacion activo
  rectangleView3: {

    flexDirection: "row",
    width: '100%',
  },
  //recuadro de pintura de enValidacion
  rectangleView12: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: '50%',
  },

  //recuadro de pintura de inactivo
  rectangleView7: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: '50%',
  },
  //recuadro de desglose de contratos
  rectangleView4: {
    borderTopStartRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(9, 30, 66, 0.2)",
    shadowRadius: 5,
    elevation: 0,
    width: '100%',
    height: "90%",
    borderWidth: 0,
    position: "relative"
    //height: hp('35%'),

  },
  wFSBETACAGX8503316W9100001: {

    fontSize: hp('2.3%'),
    textTransform: "uppercase",
    fontWeight: '700',
    color: "#cca066",
    textAlign: "center",
  },

  activoText: {
    fontSize: hp('1.5%'),
    letterSpacing: 4.1,
    textTransform: "uppercase",
    fontWeight: "800",
    color: "#097679",
    textAlign: "center",
  },
  inactivoText: {

    fontSize: hp('1.5%'),
    letterSpacing: 4.1,
    textTransform: "uppercase",
    fontWeight: "800",

    color: "#717e95",
    textAlign: "center",
  },
  enValidacinText: {

    fontSize: 10,
    letterSpacing: 2,
    lineHeight: 10,
    textTransform: "uppercase",
    fontWeight: "800",
    color: "#9f7707",
    textAlign: "center",
  },
  text: {
    width: "100%",
    fontSize: hp('3%'),
    fontWeight: "800",
    color: "#5d759f",
    // borderWidth: 3
  },
})
export default Tarjetas;

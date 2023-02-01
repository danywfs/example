import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const refreshFetch = async (originalRequest) => {
  
  const originalResponse = await fetch(originalRequest)
    .catch(function (error) {
      return false
    });
  
    return { response: originalResponse, cerrarsecion: true, mensaje: "Error de conexión" }
 
};
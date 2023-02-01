import React, { createContext, useState, useEffect, useRef } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [userToken, setUserToken] = useState('');

  const BASE_URL="https://api.taecel.com"
  const login="/api/login"
  

  return (
    <AuthContext.Provider
      value={{
         userToken, setUserToken
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
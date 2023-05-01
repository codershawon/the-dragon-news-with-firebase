import React from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const[ user,setUser] = useState(null);
  const[loading,setLoading]=useState(true)
  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logout=()=>{
    setLoading(true)
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
      console.log("Logged in user in auth observer", currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return()=>{
      unsubscribe()
    }
  },[])
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logout
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

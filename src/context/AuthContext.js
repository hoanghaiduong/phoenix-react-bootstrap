import React, { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
  signInWithCustomToken,
} from "firebase/auth";
import axios from "axios";
import { auth } from "../config/InitialFirebase";

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, user => {
  //     setCurrentUser(user ? user : null)
  //   })
  //   return () => {
  //     unsubscribe()
  //   }
  // }, [currentUser])

  const createUserSQL = async (e) => {
    const email = e.email;
    const uid = e.uid;
    const displayName = e.displayName;
    const phoneNumber = e.phoneNumber;
    const photoURL = e.photoURL;
    // (await axios.post("http://103.186.65.172:8888/firebase/signup")).headers;
  };

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then((result) => {
      // createUserSQL(result.user);
      console.log(result);
    });
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    });
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword);
  }

  function logout() {
    return signOut(auth);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((result) => {
      createUserSQL(result.user);
    });
  }

  const value = {
    currentUser,
    signInWithGoogle,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

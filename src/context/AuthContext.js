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
import { API_PATH } from "../pages/authentication/ApiPath";

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
  createOrLogin: () => Promise,
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
  const createOrLogin = async (authorization, navigate) => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${API_PATH}/api/auth`,
      headers: { 
        'accept': '*/*', 
        'Authorization': `Bearer ${authorization}`
      }
    };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      console.log(response.data.role.name);
      switch(response.data.role.name)
      {
        case "admin":
          navigate("/admin/user");
          return
        case "restaurant":
          navigate("/restaurant/management")
          return
        case "user":
          navigate("/")
          return
      }
      // if(response.data.role.name == "admin")
      // {
      //   navigate('/admin');
      // }
    })
    .catch((error) => {
      console.log(error);
    });

  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
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
    return signInWithPopup(auth, provider)
  }

  const value = {
    currentUser,
    signInWithGoogle,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    createOrLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

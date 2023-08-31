import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//firebase
import firebase from "firebase/compat/app";
import "firebase/auth";

//components
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { UserContext } from "./Context/UserContext";
import Header from "./Layouts/Header";
import FireBaseConfig from "./Firebase/FireBaseConfig";

firebase.initializeApp(FireBaseConfig);
const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      setIsLoading(true);
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => {
      // Unsubscribe the listener when component unmounts
      unsubscribe();
    };
  }, []);

  return isLoading ? (
    <div>...Loading</div>
  ) : (
    <>
      <Router>
        <ToastContainer />
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Signin" element={<SignIn />} />
            <Route exact path="/Signup" element={<SignUp />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
};

export default App;

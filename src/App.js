import React, { useState } from "react";
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

  return (
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
  );
};

export default App;

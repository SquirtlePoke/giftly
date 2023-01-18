import "../styles.css"
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginView from "../containers/LoginView"
import NavBar from "../components/NavBar.js";
import CollectionsView from "../containers/CollectionsView.js";
import SecretView from "../containers/SecretView.js";

// ! Placeholder for React Routes that don't exist, delete when Routes are implemented
const Placeholder = () => {
  return <h1>Placeholder</h1>
}

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  return (
    <>
      <BrowserRouter>  
        {/* Static content that persists across routes */}
        {/* End of static content */}
        {/* Dynamic content based on route */}
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/collections" element={<> <NavBar/><CollectionsView /> </>} />
          <Route path="/secret" element={<SecretView />} />
          {/* Missing paths redirect to '/' */}
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
        {/* End of dynamic content */}
      </BrowserRouter>
    </>
  );
};

export default App;

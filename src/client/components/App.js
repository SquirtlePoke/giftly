import "../styles.css"
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "../containers/Auth"
import Dashboard from "../containers/Dashboard"
import NavBar from "../components/NavBar.js";
import HomeView from "../containers/HomeView.js";
import ItemsView from "../containers/ItemsView.js";
import CollectionsView from "../containers/CollectionsView.js";
import LoginView from "../containers/LoginView.js";
import SecretView from "../containers/SecretView.js";
import LoginView from "../containers/LoginView.js";
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
        { isAuthenticated ? <Dashboard/> : <Auth/> }
        {/* Static content that persists across routes */}
        <NavBar />
        <div></div>
        {/* End of static content */}

        {/* Dynamic content based on route; define Routes below */}
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<Placeholder />} />
          <Route path="/collections" element={<CollectionsView />} />
          <Route path="/items" element={<ItemsView />} />
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

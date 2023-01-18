import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar.js";
import HomeView from "../containers/HomeView.js";
import CollectionsView from "../containers/CollectionsView.js";


// ! Placeholder for React Routes that don't exist, delete when Routes are implemented
const Placeholder = () => {
  return <h1>Placeholder</h1>
}

const App = () => {
  return (
    <>
      <Router>

        {/* Static content that persists across routes */}
        <NavBar />
        {/* End of static content */}

        {/* Dynamic content based on route */}
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<Placeholder />} />
          <Route path="/signup" element={<Placeholder />} />
          <Route path="/collections" element={<CollectionsView />} />
        </Routes>
        {/* End of dynamic content */}

      </Router>
    </>
  );
};

export default App;

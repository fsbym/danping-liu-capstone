import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Mint from "./pages/Mint";
import Profile from "./pages/Profile";
import User from "./pages/User";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:id" element={<User />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

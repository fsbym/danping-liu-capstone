import React from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Auth from "./Auth";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

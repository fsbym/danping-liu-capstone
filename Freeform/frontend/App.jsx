import "./App.scss"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer.jsx"
// import Home from "./pages/Home";
// import About from "./pages/About";
import Discover from "./pages/Discover/Discover.jsx"
// import Mint from "./pages/Mint";
// import Profile from "./pages/Profile";
// import User from "./pages/User";
// import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <section className="app__content">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/discover" element={<Discover />} />
            {/* <Route path="/mint" element={<Mint />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/:id" element={<User />} /> */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

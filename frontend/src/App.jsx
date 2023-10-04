import react from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Results from "./components/Results";
import Login from "./components/Login-in_out/Login";
import Registro from "./components/Login-in_out/Registro"
import RecuperarContraseña from "./components/Login-in_out/RecuperarContraseña"
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";


import { Routes, Switch, Route } from "react-router-dom";
import Contact from "./views/Contact";





export default function App() {
  return (
    <div className="app-container">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperarContraseña" element={<RecuperarContraseña />} />
        <Route path="/categorias" element={<Results />} />
        <Route path="/categorias/:id" element={<Results />} />
        <Route path="/sobreNosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<h1>404</h1>} />

      </Routes>

    </div>
  )
}

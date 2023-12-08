import react, { useEffect } from "react";
import { Routes, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Results from "./components/Results/Results";
import Login from "./components/Login-in_out/Login";
import Registro from "./components/Login-in_out/Registro"
import RecuperarContraseña from "./components/Login-in_out/RecuperarContraseña"
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import Footer from "./views/Footer/Footer";
import Opinions from "./components/Opinions/Opinions";
import Comments from "./components/Profile/ProffesorViews/Comments";
import MyClasses from "./components/Profile/ProffesorViews/MyClasses";
import ManageClasses from "./components/Profile/ProffesorViews/ManageClasses";
import Profile from "./components/Profile/Profile";


export default function App() {


  return (
    <div className="app-container">

      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperarContraseña" element={<RecuperarContraseña />} />

        <Route path="/categorias">
          <Route index element={<Results />} />
          <Route path=":id" element={<Opinions />} />
        </Route>

        <Route path="/sobreNosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />

        <Route path="/perfil/:id" element={<Profile />} />

        <Route path="/perfil/:id/solicitudes-comentarios" element={<Comments />} />
        <Route path="/perfil/:id/misClases" element={<MyClasses />} />
        <Route path="/perfil/:id/solicitudes-clases" element={<ManageClasses />} />





        {/* <Route path="*" element={<h1>404</h1>} /> */}

      </Routes>

      <Footer />

    </div>
  )
}

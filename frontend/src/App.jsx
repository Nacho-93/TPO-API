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
import Profile from "./components/Profile/Profile";
import Footer from "./views/Footer/Footer";
import Opinions from "./components/Opinions/Opinions";
import Requests from "./components/Profile/ProffesorViews/Requests";
import Classes from "./components/Profile/ProffesorViews/Classes";
import HistoryOfClasses from "./components/Profile/ProffesorViews/HistoryOfClasses";



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

        <Route path="/perfil-profesor/:id" element={<Profile />} />

        <Route path="/perfil-profesor/:id/solicitudesReseñas" element={<Requests />} />
        <Route path="/perfil-profesor/:id/clases" element={<Classes />} />
        <Route path="/perfil-profesor/:id/historial-clases" element={<HistoryOfClasses />} />





        {/* <Route path="*" element={<h1>404</h1>} /> */}

      </Routes>
      <Footer />

    </div>
  )
}

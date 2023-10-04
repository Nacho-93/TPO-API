import react from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Results from "./components/Results";
import Login from "./components/Login/Login";
import Registro from "../src/components/Login/Registro"
import RecuperarContraseña from "../src/components/Login/RecuperarContraseña"



export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Results />
      {/*<Login />*/}
      {/*<Registro />*/}
      {/*<RecuperarContraseña />*/}
    </div>
  )
}

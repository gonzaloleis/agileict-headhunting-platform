import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegisterOptions from "./components/RegisterOptions";
import ChooseSubscription from "./components/ChooseSubscription";
import RegisterEmpresa from "./components/RegisterEmpresa";
import RegisterProfesional from "./components/RegisterProfesional";
import InicioEmpresa from "./components/InicioEmpresa"; // Importar el nuevo componente
import InicioProfesional from "./components/InicioProfesional"; // Importar el nuevo componente
import { AuthProvider } from './context/AuthContext'; // Importa el contexto
import MiPerfil from "./components/MiPerfil"; // Importar el nuevo componente


import "./App.css"; // Archivo de estilos globales

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<RegisterOptions />} />
            <Route path="/choose-subscription" element={<ChooseSubscription />} />
            <Route path="/register-empresa" element={<RegisterEmpresa />} />
            <Route path="/register-profesional" element={<RegisterProfesional />} />
            <Route path="/inicio-empresa" element={<InicioEmpresa />} />
            <Route path="/inicio-profesional" element={<InicioProfesional />} />
            <Route path="/mi-perfil" element={<MiPerfil />} />

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

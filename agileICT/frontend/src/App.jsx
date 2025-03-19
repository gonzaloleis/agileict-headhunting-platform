import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegisterOptions from "./components/RegisterOptions";
import ChooseSubscription from "./components/ChooseSubscription";
import RegisterEmpresa from "./components/RegisterEmpresa";
import RegisterProfesional from "./components/RegisterProfesional";
import "./App.css"; // Archivo de estilos globales

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<RegisterOptions />} />
          <Route path="/choose-subscription" element={<ChooseSubscription />} />
          <Route path="/register-empresa" element={<RegisterEmpresa />} />
          <Route path="/register-profesional" element={<RegisterProfesional />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

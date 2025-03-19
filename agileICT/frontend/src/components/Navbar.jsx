import React, { useState } from "react";
import "../Navbar.css"; // Archivo de estilos
import LoginForm from "./LoginForm";

const Navbar = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    };

    return (
        <div>
            <nav className="navbar">
                <h1 className="logo">AgileICT</h1>
                <button className="login-btn" onClick={handleLoginClick}>Iniciar Sesión</button>
            </nav>
            {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
        </div>
    );
};

export default Navbar;

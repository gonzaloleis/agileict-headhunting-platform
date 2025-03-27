import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa el contexto
import "../Navbar.css";
import LoginForm from "./LoginForm";

const Navbar = () => {
    const { user, logout } = useAuth(); // Obtiene el usuario y funciones del contexto
    const [showLoginForm, setShowLoginForm] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
        navigate('/'); // Redirige a la página principal
    };

    const handleLogoutClick = () => {
        logout(); // Llama a la función de logout del contexto
        navigate('/');
        setShowLoginForm(false);
    };

    return (
        <div>
            <nav className="navbar">
                <h1 className="logo">AgileICT</h1>
                {user ? (
                    <button className="login-btn" onClick={handleLogoutClick}>Cerrar Sesión</button>
                ) : (
                    !showLoginForm && (
                        <button className="login-btn" onClick={handleLoginClick}>Iniciar Sesión</button>
                    )
                )}
            </nav>
            {showLoginForm && !user && (
                <LoginForm onClose={handleCloseLoginForm} />
            )}
        </div>
    );
};

export default Navbar;

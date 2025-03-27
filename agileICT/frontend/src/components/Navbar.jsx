import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../Navbar.css";
import LoginForm from "./LoginForm";

const Navbar = () => {
    const [loggedInEmail, setLoggedInEmail] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            setLoggedInEmail(storedUser);
        }
    }, []);

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
        navigate('/'); // Redirige a la página principal
    };

    const handleLogoutClick = () => {
        setLoggedInEmail('');
        localStorage.removeItem("loggedInUser");
        navigate('/');
        setShowLoginForm(false);
    };

    return (
        <div>
            <nav className="navbar">
                <h1 className="logo">AgileICT</h1>
                {loggedInEmail ? (
                    <button className="login-btn" onClick={handleLogoutClick}>Cerrar Sesión</button>
                ) : (
                    !showLoginForm && (
                        <button className="login-btn" onClick={handleLoginClick}>Iniciar Sesión</button>
                    )
                )}
            </nav>
            {showLoginForm && !loggedInEmail && (
                <LoginForm onClose={handleCloseLoginForm} setLoggedInEmail={setLoggedInEmail} />
            )}
        </div>
    );
};

export default Navbar;


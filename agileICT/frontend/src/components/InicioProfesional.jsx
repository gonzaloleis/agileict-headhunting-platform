import React, { useState } from 'react';
import '../InicioProfesional.css';

const InicioProfesional = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="inicio-profesional-container">
            <button className="toggle-btn-profesional" onClick={toggleMenu}>☰</button>
            <div className={`inicio-profesional-sidebar ${menuOpen ? 'open' : ''}`}>
                <nav className="inicio-profesional-menu">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Perfil</a></li>
                    </ul>
                </nav>
            </div>
            <div className={`inicio-profesional-content ${menuOpen ? 'shifted' : ''}`}>
                <h1>Bienvenido</h1>
                <p>Aquí puedes ver las ofertas que has recibido.</p>
            </div>
        </div>
    );
};

export default InicioProfesional;
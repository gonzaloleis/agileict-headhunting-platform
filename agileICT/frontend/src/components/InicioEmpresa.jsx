import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../InicioEmpresa.css';

const InicioEmpresa = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="inicio-empresa">
            <button className="toggle-btn" onClick={toggleMenu}>☰</button>
            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
                <nav className="menu">
                    <ul>
                        <li><Link to="/buscar-perfiles">Buscar Perfiles</Link></li>
                        <li><Link to="/mi-perfil">Mi Perfil</Link></li>
                        <li><Link to="/ajustes">Ajustes</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={`content ${menuOpen ? 'shifted' : ''}`}>
                <h1 className="inicio-empresa-title">¿Qué necesitas?</h1>
                <div className="inicio-empresa-form-container">
                    <div className="inicio-empresa-search-bar">
                        <span className="inicio-empresa-search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Introduce un título para la búsqueda"
                            className="inicio-empresa-input"
                        />
                    </div>
                    <div className="inicio-empresa-select-group">
                        <select className="inicio-empresa-select">
                            <option>Tipo de profesional</option>
                        </select>
                        <select className="inicio-empresa-select">
                            <option>Elija la disponibilidad necesaria</option>
                        </select>
                    </div>
                    <div className="inicio-empresa-select-group">
                        <select className="inicio-empresa-select">
                            <option>Nivel de experiencia</option>
                        </select>
                        <select className="inicio-empresa-select">
                            <option>Competencias clave</option>
                        </select>
                    </div>
                    <textarea
                        className="inicio-empresa-textarea"
                        placeholder="Describe exactamente lo que necesitas"
                    ></textarea>
                    <button className="inicio-empresa-button">Buscar</button>
                </div>
            </div>
        </div>
    );
};

export default InicioEmpresa;
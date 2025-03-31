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
                        <li><Link to="/inicio-empresa">Buscar Perfiles</Link></li>
                        <li><Link to="/mi-perfil">Mi Perfil</Link></li>
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
                    <div className="inicio-empresa-select-grid">
                        <div className="inicio-empresa-select-group">
                            <label className="inicio-empresa-label">Tipo de profesional</label>
                            <select className="inicio-empresa-select">
                                <option value="">Seleccione un tipo</option>
                                <option value="desarrollador">Desarrollador</option>
                                <option value="diseñador">Diseñador</option>
                                <option value="gestor-proyectos">Gestor de Proyectos</option>
                            </select>
                        </div>
                        <div className="inicio-empresa-select-group">
                            <label className="inicio-empresa-label">Disponibilidad necesaria</label>
                            <select className="inicio-empresa-select">
                                <option value="">Seleccione la disponibilidad</option>
                                <option value="tiempo-completo">Tiempo completo</option>
                                <option value="medio-tiempo">Medio tiempo</option>
                            </select>
                        </div>
                        <div className="inicio-empresa-select-group">
                            <label className="inicio-empresa-label">Nivel de experiencia</label>
                            <select className="inicio-empresa-select">
                                <option value="">Seleccione el nivel</option>
                                <option value="junior">Junior</option>
                                <option value="semi-senior">Semi-Senior</option>
                                <option value="senior">Senior</option>
                                <option value="lead">Lead</option>
                                <option value="manager">Manager</option>
                                <option value="c-level">C-level</option>
                            </select>
                        </div>
                        <div className="inicio-empresa-select-group">
                            <label className="inicio-empresa-label">Competencias clave</label>
                            <select className="inicio-empresa-select">
                                <option value="">Seleccione una competencia</option>
                                <option value="javascript">JavaScript</option>
                                <option value="react">React</option>
                                <option value="gestion-proyectos">Gestión de Proyectos</option>
                                <option value="ciberseguridad">Ciberseguridad</option>
                                <option value="ia">IA</option>
                                <option value="llms">LLMs</option>
                            </select>
                        </div>
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
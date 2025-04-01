import React, { useState } from 'react';
import '../MiPerfil.css';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const MiPerfil = () => {
    const navigate = useNavigate(); // Hook para navegar entre páginas

    const handleNavigate = () => {
        navigate('/editar-perfil'); // Navegar a la página "/inicio-empresa"
    };

    const { user } = useAuth(); // Obtener el usuario logueado desde el contexto

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    if (!user) {
        return <p>No estás logueado. Por favor, inicia sesión.</p>;
    }

    return (
        <div className="mi-perfil-container">
            <div className="mi-perfil-card">
                <h1 className="mi-perfil-title">Mi Perfil</h1>
                {user.tipo === 'empresa' ? (
                    <div className="mi-perfil-info">
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
                        <h2 className="mi-perfil-subtitle">{user.nombreEmpresa || 'Nombre de la Empresa'}</h2>
                        <p><strong>CIF:</strong> {user.cif || 'CIF no disponible'}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Teléfono:</strong> {user.telefono || 'Teléfono no disponible'}</p>
                        <p><strong>Dirección:</strong> {user.direccion || 'Dirección no disponible'}</p>
                        <p><strong>Descripción sobre la empresa:</strong> {user.descripcion || 'Descripción no disponible'}</p>
                    </div>
                ) : (
                    <div className="mi-perfil-info">
                        <button className="toggle-btn-profesional" onClick={toggleMenu}>☰</button>
                        <div className={`inicio-profesional-sidebar ${menuOpen ? 'open' : ''}`}>
                            <nav className="inicio-profesional-menu">
                                <ul>
                                    <li><a href="#">Inicio</a></li>
                                    <li><Link to="/inicio-profesional">Ofertas</Link></li>
                                    <li><Link to="/mi-perfil">Perfil</Link></li> {/* Cambiado a Link */}
                                </ul>
                            </nav>
                        </div>
                        <h2 className="mi-perfil-subtitle">{user.nombre || 'Nombre del Profesional'}</h2>
                        <p><strong>Apellidos:</strong> {user.apellidos || 'Apellidos no disponibles'}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Teléfono:</strong> {user.telefono || 'Teléfono no disponible'}</p>
                        <p><strong>Estudios:</strong> {user.estudios || 'Profesión no disponible'}</p>
                        <p><strong>Descripción:</strong> {user.descripcion || 'Descripción no disponible'}</p>
                        <p><strong>Quiero recibir ofertas:</strong> {user.recibeOfertas || 'Ofertas no disponible'}</p>

                    </div>
                )}
                <button className="mi-perfil-edit-btn" onClick={handleNavigate}>Editar Perfil</button>
            </div>
        </div>
    );
};

export default MiPerfil;
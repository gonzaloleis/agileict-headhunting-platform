import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../EditarPerfil.css';

const EditarPerfil = () => {
    const { user } = useAuth(); // Obtén el usuario desde el contexto

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    if (!user) {
        return <p>No estás logueado. Por favor, inicia sesión.</p>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`Campo ${name} actualizado a: ${value}`);
        // Aquí puedes manejar los cambios, por ejemplo, enviarlos al backend
    };

    return (
        <div className="editar-perfil-container">
            <div className="editar-perfil-card">
                <h1 className="editar-perfil-title">Editar Perfil</h1>
                {user.type === 'empresa' ? (
                    <div className="editar-perfil-info">
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
                        <label>
                            <strong>Nombre de la Empresa:</strong>
                            <input
                                type="text"
                                name="nombreEmpresa"
                                defaultValue={user.nombreEmpresa || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            <strong>CIF:</strong>
                            <input
                                type="text"
                                name="cif"
                                defaultValue={user.cif || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            <strong>Email:</strong>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user.email || ''}
                                onChange={handleInputChange}
                                disabled // No editable
                            />
                        </label>
                        <label>
                            <strong>Teléfono:</strong>
                            <input
                                type="text"
                                name="telefono"
                                defaultValue={user.telefono || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            <strong>Dirección:</strong>
                            <input
                                type="text"
                                name="direccion"
                                defaultValue={user.direccion || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            <strong>Descripción sobre la empresa:</strong>
                            <textarea
                                name="descripcion"
                                defaultValue={user.descripcion || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                ) : (
                    <div className="editar-perfil-info">
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
                        <label>
                            <strong>Nombre:</strong>
                            <input
                                type="text"
                                name="nombre"
                                defaultValue={user.nombre || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            <strong>Apellidos:</strong>
                            <input
                                type="text"
                                name="apellidos"
                                defaultValue={user.apellidos || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            <strong>Email:</strong>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user.email || ''}
                                onChange={handleInputChange}
                                disabled // No editable
                            />
                        </label>
                        <label>
                            <strong>Teléfono:</strong>
                            <input
                                type="text"
                                name="telefono"
                                defaultValue={user.telefono || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            <strong>Profesión:</strong>
                            <input
                                type="text"
                                name="profesion"
                                defaultValue={user.profesion || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            <strong>Descripción:</strong>
                            <textarea
                                name="descripcion"
                                defaultValue={user.descripcion || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            <strong>Quiero recibir ofertas:</strong>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="recibeOfertas"
                                    checked={user.recibeOfertas || false}
                                    onChange={handleInputChange}
                                />
                                <span className="slider"></span>
                            </label>
                        </label>
                    </div>
                )}
                <button className="editar-perfil-save-btn">Guardar Cambios</button>
            </div>
        </div>
    );
};

export default EditarPerfil;
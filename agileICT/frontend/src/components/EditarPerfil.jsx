import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../EditarPerfil.css';

const EditarPerfil = () => {
    const { user } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const [formData, setFormData] = useState({ ...user });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    if (!user) {
        return <p>No estás logueado. Por favor, inicia sesión.</p>;
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/professionals/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error en la actualización');
            }

            alert('Perfil actualizado correctamente');
        } catch (error) {
            console.error('Error al guardar cambios:', error);
            alert('Error al actualizar el perfil');
        }
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
                                    <li><Link to="/inicio-empresa">Inicio</Link></li>
                                    <li><Link to="/mi-perfil">Mi Perfil</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <label>
                            <strong>Nombre de la Empresa:</strong>
                            <input type="text" name="nombreEmpresa" value={formData.nombreEmpresa || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>CIF:</strong>
                            <input type="text" name="cif" value={formData.cif || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>Email:</strong>
                            <input type="email" name="email" value={formData.email || ''} disabled />
                        </label>
                        <label>
                            <strong>Teléfono:</strong>
                            <input type="text" name="telefono" value={formData.telefono || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>Dirección:</strong>
                            <input type="text" name="direccion" value={formData.direccion || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>Descripción sobre la empresa:</strong>
                            <textarea name="descripcion" value={formData.descripcion || ''} onChange={handleInputChange} />
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
                                    <li><Link to="/mi-perfil">Perfil</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <label>
                            <strong>Nombre:</strong>
                            <input type="text" name="nombre" value={formData.nombre || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>Apellidos:</strong>
                            <input type="text" name="apellidos" value={formData.apellidos || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>Email:</strong>
                            <input type="email" name="email" value={formData.email || ''} disabled />
                        </label>
                        <label>
                            <strong>Teléfono:</strong>
                            <input type="text" name="telefono" value={formData.telefono || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>Estudios:</strong>
                            <textarea name="estudios" value={formData.estudios || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>Experiencia:</strong>
                            <input type="number" name="experiencia" value={formData.experiencia || 0} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>Especialidad:</strong>
                            <input type="text" name="especialidad" value={formData.especialidad || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>Descripción:</strong>
                            <textarea name="descripcion" value={formData.descripcion || ''} onChange={handleInputChange} />
                        </label>
                        <label>
                            <strong>Quiero recibir ofertas:</strong>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="recibirOfertas"
                                    checked={formData.recibirOfertas || false}
                                    onChange={handleInputChange}
                                />
                                <span className="slider"></span>
                            </label>
                        </label>
                    </div>
                )}
                <button className="editar-perfil-save-btn" onClick={handleSave}>Guardar Cambios</button>
            </div>
        </div>
    );
};

export default EditarPerfil;
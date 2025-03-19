import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../RegisterForm.css';

const RegisterProfesional = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        estudios: '',
        experiencia: 0,
        especialidad: '',
        descripcion: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // Extraer confirmPassword del objeto para no enviarlo al backend
        const { confirmPassword, ...dataToSend } = formData;

        try {
            const response = await fetch("http://localhost:8080/api/professionals/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Profesional registrado:", data);
                navigate('/');
            } else {
                console.error("Error en el registro del profesional");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className="register-form-container">
            <h2>Registro Profesional</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Apellidos:
                    <input
                        type="text"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Teléfono:
                    <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Estudios:
                    <input
                        type="text"
                        name="estudios"
                        value={formData.estudios}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Años de experiencia:
                    <input
                        type="number"
                        name="experiencia"
                        value={formData.experiencia}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Especialidad:
                    <input
                        type="text"
                        name="especialidad"
                        value={formData.especialidad}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Descripción sobre el profesional:
                    <textarea
                        name="descripcion"
                        rows="4"
                        value={formData.descripcion}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Contraseña:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Confirmar contraseña:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </label>
                <div className="button-container">
                    <button type="submit">Registrarse</button>
                    <button className="back-button" onClick={handleBackClick}>Volver</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterProfesional;

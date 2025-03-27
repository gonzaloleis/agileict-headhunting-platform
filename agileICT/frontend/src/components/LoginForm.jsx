import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginForm.css';

const LoginForm = ({ setLoggedInEmail, onClose }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const params = new URLSearchParams();
        params.append('email', formData.email);
        params.append('password', formData.password);

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params
            });

            const result = await response.text();
            
            if (result === 'profesional' || result === 'empresa') {
                setLoggedInEmail(formData.email);
                localStorage.setItem("loggedInUser", formData.email); // Guardar en localStorage

                navigate(result === 'profesional' ? '/inicio-profesional' : '/inicio-empresa');
            } else {
                alert("Correo o contraseña incorrectos");
            }
        } catch (error) {
            console.error("Error en el login:", error);
            alert("Error de conexión con el servidor");
        }
    };

    return (
        <div className="login-form-container">
            <div className="login-form">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Contraseña:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </label>
                    <button type="submit">Entrar</button>
                    <button type="button" onClick={onClose}>Cerrar</button> {/* Botón para cerrar el formulario */}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

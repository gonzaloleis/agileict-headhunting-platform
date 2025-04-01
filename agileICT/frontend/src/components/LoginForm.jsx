import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa el contexto
import '../LoginForm.css';

const LoginForm = ({ onClose }) => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Obtiene la función de login del contexto
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

        // try {
        //     const response = await fetch('http://localhost:8080/api/login', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //         body: params
        //     });

        //     const result = await response.text();

        //     if (result === 'profesional' || result === 'empresa') {
        //         login({ email: formData.email, type: result }); // Llama al login del contexto

        //         navigate(result === 'profesional' ? '/inicio-profesional' : '/inicio-empresa');
        //     } else {
        //         alert("Correo o contraseña incorrectos");
        //     }
        // } catch (error) {
        //     console.error("Error en el login:", error);
        //     alert("Error de conexión con el servidor");
        // }
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params
            });
    
            if (!response.ok) {
                alert("Correo o contraseña incorrectos");
                return;
            }
    
            const { tipo, usuario } = await response.json(); // Extrae el tipo y el usuario
    
            login({ ...usuario, tipo }); // Guarda el usuario con el tipo en el contexto
    
            navigate(tipo === "profesional" ? "/inicio-profesional" : "/inicio-empresa");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Ocurrió un error al intentar iniciar sesión.");
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
                    <button type="button" onClick={onClose}>Cerrar</button> {/* Cierra el formulario */}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

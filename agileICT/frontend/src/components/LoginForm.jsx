import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginForm.css';

const LoginForm = ({ onClose }) => {
    const navigate = useNavigate();

    // 1. Estado para guardar email y contraseña
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // 2. Captura los cambios en los campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 3. Al enviar el formulario, llama al backend
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

            if (result === 'profesional') {
                navigate('/InicioProfesional'); // MIENTRAS NO ESTE TERMINADO INICIO PROFESIONAL PROBAR CON INICIO EMPRESA 
            } else if (result === 'empresa') {
                navigate('/InicioEmpresa');  //MIENTRAS NO ESTE TERMINADA LA FUNCIONALIDAD DE REGISTRO EMPRESA, PROBAR CON PROFESIONAL (ES EL MISMO CODIGO)
            } else {
                alert("Correo o contraseña incorrectos");
            }
        } catch (error) {
            console.error("Error en el login:", error);
            alert("Error de conexión con el servidor");
        }
    };

    // 4. Render del formulario
    return (
        <div className="login-form-container">
            <div className="login-form">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Contraseña:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">Entrar</button>
                </form>
                {onClose && (
                    <button className="close-btn" onClick={onClose}>Cerrar</button>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
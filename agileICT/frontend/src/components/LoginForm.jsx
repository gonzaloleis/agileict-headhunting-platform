import React from 'react';
import '../LoginForm.css';

const LoginForm = ({ onClose }) => {
    return (
        <div className="login-form-container">
            <div className="login-form">
                <h2>Iniciar Sesión</h2>
                <form>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Contraseña:
                        <input type="password" name="password" />
                    </label>
                    <button type="submit">Entrar</button>
                </form>
                <button className="close-btn" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default LoginForm;
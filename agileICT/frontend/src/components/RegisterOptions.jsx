import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../RegisterOptions.css';

const RegisterOptions = () => {
    const navigate = useNavigate();

    const handleEmpresaClick = () => {
        navigate('/choose-subscription');
    };

    const handleProfesionalClick = () => {
        navigate('/register-profesional');
    };

    return (
        <div className="register-container-options">
            <h2>Regístrate</h2>
            <p>¿Te identificas como empresa o profesional?</p>

            <div className="options">
                <div className="option" onClick={handleEmpresaClick}>
                    <img src="/images/EMPRESA.png" alt="Empresa" className="option-image" />

                </div>
                <div className="option" onClick={handleProfesionalClick}>
                    <img src="/images/PROFESIONAL.png" alt="Profesional" className="option-image" />

                </div>
            </div>
        </div>
    );
};

export default RegisterOptions;
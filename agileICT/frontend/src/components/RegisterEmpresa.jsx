import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../RegisterEmpresa.css';

const RegisterEmpresa = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const plan = queryParams.get('plan');

    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        nombreEmpresa: '',
        cif: '',
        email: '',
        telefono: '',
        direccion: '',
        descripcion: '',
        password: '',
        confirmPassword: '',
        plan: plan, // se obtiene del query
    });

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Manejar envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validar que la contraseña y su confirmación coincidan
        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
    
        // Crear un objeto que excluya el campo confirmPassword
        const { confirmPassword, ...dataToSend } = formData;
    
        try {
            const response = await fetch("http://localhost:8080/api/companies/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log("Empresa registrada:", data);
                // Redirigir o mostrar mensaje de éxito
                navigate('/inicio-empresa'); // o a otra ruta de confirmación
            } else {
                console.error("Error en el registro de la empresa");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const prueba = (e) => {
        e.preventDefault();
        navigate('/inicio-empresa');
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        navigate('/choose-subscription');
    };

    const getPlanImage = (plan) => {
        switch (plan) {
            case 'oro':
                return '/images/plan_oro.png';
            case 'plata':
                return '/images/plan_plata.png';
            case 'bronce':
                return '/images/plan_bronce.png';
            default:
                return '';
        }
    };

    return (
        <div className="register-container">
            <div className="register-content">
                <div className="form-left">
                    <h2>Registro Empresa</h2>
                    <p>Has elegido la suscripción {plan}</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Nombre de la Empresa:
                            <input
                                type="text"
                                name="nombreEmpresa"
                                value={formData.nombreEmpresa}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            CIF:
                            <input
                                type="text"
                                name="cif"
                                value={formData.cif}
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
                            Dirección:
                            <input
                                type="text"
                                name="direccion"
                                value={formData.direccion}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Descripción sobre la empresa:
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
                            <button type="submit" onClick={prueba}>Registrarse</button> {/* Cambiar el método de prueba a submit cuando esté la función hecha */}
                            <button className="back-button" onClick={handleBackClick}>Volver</button>
                        </div>
                    </form>
                </div>
                <div className="form-right">
                    <img src={getPlanImage(plan)} alt={`Plan ${plan}`} className="plan-image" />
                </div>
            </div>
        </div>
    );
};

export default RegisterEmpresa;

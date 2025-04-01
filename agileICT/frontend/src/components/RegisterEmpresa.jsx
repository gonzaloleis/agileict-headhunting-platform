import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../RegisterEmpresa.css';
import { useAuth } from '../context/AuthContext';

const RegistroEmpresa = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Usa el contexto

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const plan = queryParams.get('plan');

    // Estado para validaciones
    const [passwordMessage, setPasswordMessage] = useState('');
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('');

    // Estado del formulario
    const [formData, setFormData] = useState({
        nombreEmpresa: '',
        cif: '',
        email: '',
        telefono: '',
        direccion: '',
        descripcion: '',
        password: '',
        confirmPassword: '',
        plan: plan, // Se obtiene del query
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'password') {
            if (value.length < 8) {
                setPasswordMessage('La contraseña debe tener 8 caracteres o más');
            } else {
                setPasswordMessage('');
            }
        }

        if (name === 'confirmPassword') {
            if (value !== formData.password) {
                setConfirmPasswordMessage('Las contraseñas no coinciden');
            } else {
                setConfirmPasswordMessage('');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const { confirmPassword, ...dataToSend } = formData;

        // try {
        //     const response = await fetch("http://localhost:8080/api/companies/register", {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(dataToSend)
        //     });

        //     if (response.ok) {
        //         login({ email: formData.email, type: 'empresa' }); // Llama al login del contexto
        //         navigate('/inicio-empresa');
        //     } else {
        //         alert('Error en el registro de la empresa');
        //     }
        // } catch (error) {
        //     console.error("Error:", error);
        // }
        try {
            const response = await fetch("http://localhost:8080/api/companies/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend)
            });
    
            if (!response.ok) {
                alert("Error en el registro de la empresa");
                return;
            }
    
            const { tipo, usuario } = await response.json(); // Extraer tipo y usuario de la respuesta
    
            login({ ...usuario, tipo }); // Guardar en el contexto
    
            navigate("/inicio-empresa");
        } catch (error) {
            console.error("Error:", error);
            alert("Ocurrió un error al registrar la empresa.");
        }
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        navigate('/choose-subscription');
    };

    const getPlanImage = (plan) => {
        switch (plan) {
            case 'oro': return '/images/plan_oro.png';
            case 'plata': return '/images/plan_plata.png';
            case 'bronce': return '/images/plan_bronce.png';
            default: return '';
        }
    };

    return (
        <div className="registro-empresa-container">
            <div className="registro-empresa-content">
                <div className="registro-empresa-form-left">
                    <h2>Registro Empresa</h2>
                    <p>Has elegido la suscripción {plan}</p>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre de la Empresa:
                            <input type="text" name="nombreEmpresa" value={formData.nombreEmpresa} onChange={handleChange} required />
                        </label>
                        <label>CIF:
                            <input type="text" name="cif" value={formData.cif} onChange={handleChange} required />
                        </label>
                        <label>Email:
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </label>
                        <label>Teléfono:
                            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                        </label>
                        <label>Dirección:
                            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
                        </label>
                        <label>Descripción sobre la empresa:
                            <textarea name="descripcion" rows="4" value={formData.descripcion} onChange={handleChange} required />
                        </label>
                        <label>Contraseña:
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                            {passwordMessage && <p className="registro-empresa-error">{passwordMessage}</p>}
                        </label>
                        <label>Confirmar contraseña:
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                            {confirmPasswordMessage && <p className="registro-empresa-error">{confirmPasswordMessage}</p>}
                        </label>
                        <div className="registro-empresa-button-container">
                            <button type="submit" onClick={handleSubmit}>Registrarse</button>
                            <button className="registro-empresa-back-button" onClick={handleBackClick}>Volver</button>
                        </div>
                    </form>
                </div>
                <div className="registro-empresa-form-right">
                    <img src={getPlanImage(plan)} alt={`Plan ${plan}`} className="registro-empresa-plan-image" />
                </div>
            </div>
        </div>
    );
};

export default RegistroEmpresa;

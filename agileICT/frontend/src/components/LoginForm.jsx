import React from 'react';
import '../LoginForm.css';

const LoginForm = ({ onClose }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

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

            if (result === 'profesional') {
                navigate('/InicioProfesional');
            } else if (result === 'empresa') {
                navigate('/InicioEmpresa');
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
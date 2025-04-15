/* import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../InicioEmpresa.css';

const InicioEmpresa = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="inicio-empresa">
            <button className="toggle-btn" onClick={toggleMenu}>☰</button>
            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
                <nav className="menu">
                    <ul>
                        <li><Link to="/buscar-perfiles">Buscar Perfiles</Link></li>
                        <li><Link to="/inicio-empresa">Buscar Perfiles</Link></li>
                        <li><Link to="/mi-perfil">Mi Perfil</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={`content ${menuOpen ? 'shifted' : ''}`}>
                <h1 className="inicio-empresa-title">¿Qué necesitas?</h1>
                <div className="inicio-empresa-form-container">
                    <div className="inicio-empresa-search-bar">
                        <span className="inicio-empresa-search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Introduce un título para la búsqueda"
                            className="inicio-empresa-input"
                        />
                    </div>
                    <div className="inicio-empresa-select-grid">
                        <div className="inicio-empresa-select-group">
                            <label className="inicio-empresa-label">Tipo de profesional</label>
                            <select className="inicio-empresa-select">
                                <option value="">Seleccione un tipo</option>
                                <option value="desarrollador">Desarrollador</option>
                                <option value="diseñador">Diseñador</option>
                                <option value="gestor-proyectos">Gestor de Proyectos</option>
                            </select>
                        </div>
                        <div className="inicio-empresa-select-group">
                            <label className="inicio-empresa-label">Disponibilidad necesaria</label>
                            <select className="inicio-empresa-select">
                                <option value="">Seleccione la disponibilidad</option>
                                <option value="tiempo-completo">Tiempo completo</option>
                                <option value="medio-tiempo">Medio tiempo</option>
                            </select>
                        </div>
                        <div className="inicio-empresa-select-group">
                            <label className="inicio-empresa-label">Nivel de experiencia</label>
                            <select className="inicio-empresa-select">
                                <option value="">Seleccione el nivel</option>
                                <option value="junior">Junior</option>
                                <option value="semi-senior">Semi-Senior</option>
                                <option value="senior">Senior</option>
                                <option value="lead">Lead</option>
                                <option value="manager">Manager</option>
                                <option value="c-level">C-level</option>
                            </select>
                        </div>
                        <div className="inicio-empresa-select-group">
                            <label className="inicio-empresa-label">Competencias clave</label>
                            <select className="inicio-empresa-select">
                                <option value="">Seleccione una competencia</option>
                                <option value="javascript">JavaScript</option>
                                <option value="react">React</option>
                                <option value="gestion-proyectos">Gestión de Proyectos</option>
                                <option value="ciberseguridad">Ciberseguridad</option>
                                <option value="ia">IA</option>
                                <option value="llms">LLMs</option>
                            </select>
                        </div>
                    </div>
                    <textarea
                        className="inicio-empresa-textarea"
                        placeholder="Describe exactamente lo que necesitas"
                    ></textarea>
                    <button className="inicio-empresa-button">Buscar</button>
                </div>
            </div>
        </div>
    );
};

export default InicioEmpresa; */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../InicioEmpresa.css';

const InicioEmpresa = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Estados para los campos del formulario
  const [tituloBusqueda, setTituloBusqueda] = useState('');
  const [tipoProfesional, setTipoProfesional] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');
  const [nivelExperiencia, setNivelExperiencia] = useState('');
  const [competencias, setCompetencias] = useState('');
  const [descripcionDetallada, setDescripcionDetallada] = useState('');
  const [mensaje, setMensaje] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Suponiendo que el companyId se obtiene de la sesión o lo defines estáticamente para pruebas
      const companyId = 1;
      
      // Construir los parámetros para enviar al backend
      const params = new URLSearchParams();
      params.append('companyId', companyId);
      params.append('descripcion', tituloBusqueda);
      params.append('tipoProfesional', tipoProfesional);
      params.append('disponibilidadNecesaria', disponibilidad);
      params.append('nivelExperiencia', nivelExperiencia);
      params.append('competenciasClave', competencias);
      params.append('descripcionDetallada', descripcionDetallada);

      // Realizar la petición POST (asegúrate de que la URL coincide con la del endpoint del backend)
      const response = await axios.post('http://localhost:8080/busquedas/registrar', params);
      setMensaje(response.data);
    } catch (error) {
      console.error("Error registrando la búsqueda:", error);
      setMensaje("Hubo un error al registrar la búsqueda");
    }
  };

  return (
    <div className="inicio-empresa">
      <button className="toggle-btn" onClick={toggleMenu}>☰</button>
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <nav className="menu">
          <ul>
            <li><Link to="/buscar-perfiles">Buscar Perfiles</Link></li>
            <li><Link to="/inicio-empresa">Buscar Perfiles</Link></li>
            <li><Link to="/mi-perfil">Mi Perfil</Link></li>
          </ul>
        </nav>
      </div>
      <div className={`content ${menuOpen ? 'shifted' : ''}`}>
        <h1 className="inicio-empresa-title">¿Qué necesitas?</h1>
        <div className="inicio-empresa-form-container">
          <form onSubmit={handleSubmit}>
            <div className="inicio-empresa-search-bar">
              <span className="inicio-empresa-search-icon">🔍</span>
              <input
                type="text"
                placeholder="Introduce un título para la búsqueda"
                className="inicio-empresa-input"
                value={tituloBusqueda}
                onChange={(e) => setTituloBusqueda(e.target.value)}
                required
              />
            </div>
            <div className="inicio-empresa-select-grid">
              <div className="inicio-empresa-select-group">
                <label className="inicio-empresa-label">Tipo de profesional</label>
                <select
                  className="inicio-empresa-select"
                  value={tipoProfesional}
                  onChange={(e) => setTipoProfesional(e.target.value)}
                  required
                >
                  <option value="">Seleccione un tipo</option>
                  <option value="desarrollador">Desarrollador</option>
                  <option value="diseñador">Diseñador</option>
                  <option value="gestor-proyectos">Gestor de Proyectos</option>
                </select>
              </div>
              <div className="inicio-empresa-select-group">
                <label className="inicio-empresa-label">Disponibilidad necesaria</label>
                <select
                  className="inicio-empresa-select"
                  value={disponibilidad}
                  onChange={(e) => setDisponibilidad(e.target.value)}
                  required
                >
                  <option value="">Seleccione la disponibilidad</option>
                  <option value="tiempo-completo">Tiempo completo</option>
                  <option value="medio-tiempo">Medio tiempo</option>
                </select>
              </div>
              <div className="inicio-empresa-select-group">
                <label className="inicio-empresa-label">Nivel de experiencia</label>
                <select
                  className="inicio-empresa-select"
                  value={nivelExperiencia}
                  onChange={(e) => setNivelExperiencia(e.target.value)}
                  required
                >
                  <option value="">Seleccione el nivel</option>
                  <option value="junior">Junior</option>
                  <option value="semi-senior">Semi-Senior</option>
                  <option value="senior">Senior</option>
                  <option value="lead">Lead</option>
                  <option value="manager">Manager</option>
                  <option value="c-level">C-level</option>
                </select>
              </div>
              <div className="inicio-empresa-select-group">
                <label className="inicio-empresa-label">Competencias clave</label>
                <select
                  className="inicio-empresa-select"
                  value={competencias}
                  onChange={(e) => setCompetencias(e.target.value)}
                  required
                >
                  <option value="">Seleccione una competencia</option>
                  <option value="javascript">JavaScript</option>
                  <option value="react">React</option>
                  <option value="gestion-proyectos">Gestión de Proyectos</option>
                  <option value="ciberseguridad">Ciberseguridad</option>
                  <option value="ia">IA</option>
                  <option value="llms">LLMs</option>
                </select>
              </div>
            </div>
            <textarea
              className="inicio-empresa-textarea"
              placeholder="Describe exactamente lo que necesitas"
              value={descripcionDetallada}
              onChange={(e) => setDescripcionDetallada(e.target.value)}
              required
            ></textarea>
            <button className="inicio-empresa-button" type="submit">Buscar</button>
          </form>
          {mensaje && <p>{mensaje}</p>}
        </div>
      </div>
    </div>
  );
};

export default InicioEmpresa;i
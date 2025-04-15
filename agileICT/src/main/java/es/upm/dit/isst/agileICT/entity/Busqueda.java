package es.upm.dit.isst.agileICT.entity;

import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

@Entity
public class Busqueda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Texto breve o "título" de la búsqueda
    private String descripcion;

    private LocalDateTime fechaBusqueda;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    // --- NUEVOS CAMPOS ---

    @Column(name = "tipo_profesional")
    private String tipoProfesional;

    @Column(name = "disponibilidad_necesaria")
    private String disponibilidadNecesaria;

    @Column(name = "nivel_experiencia")
    private String nivelExperiencia;

    @Column(name = "competencias_clave")
    private String competenciasClave;

    // Para evitar confusiones con el campo `descripcion` existente, 
    // puedes llamarlo "detalleBusqueda" o "descripcionLarga":
    @Column(name = "descripcion_detallada", columnDefinition = "TEXT")
    private String descripcionDetallada;

    // Constructor vacío requerido por JPA
    public Busqueda() {}

    // Constructor adicional para mayor comodidad, si lo deseas
    public Busqueda(
        String descripcion,
        LocalDateTime fechaBusqueda,
        Company company,
        String tipoProfesional,
        String disponibilidadNecesaria,
        String nivelExperiencia,
        String competenciasClave,
        String descripcionDetallada
    ) {
        this.descripcion = descripcion;
        this.fechaBusqueda = fechaBusqueda;
        this.company = company;
        this.tipoProfesional = tipoProfesional;
        this.disponibilidadNecesaria = disponibilidadNecesaria;
        this.nivelExperiencia = nivelExperiencia;
        this.competenciasClave = competenciasClave;
        this.descripcionDetallada = descripcionDetallada;
    }

    // Getters y setters de todos los campos

    public Long getId() {
        return id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public LocalDateTime getFechaBusqueda() {
        return fechaBusqueda;
    }

    public void setFechaBusqueda(LocalDateTime fechaBusqueda) {
        this.fechaBusqueda = fechaBusqueda;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public String getTipoProfesional() {
        return tipoProfesional;
    }

    public void setTipoProfesional(String tipoProfesional) {
        this.tipoProfesional = tipoProfesional;
    }

    public String getDisponibilidadNecesaria() {
        return disponibilidadNecesaria;
    }

    public void setDisponibilidadNecesaria(String disponibilidadNecesaria) {
        this.disponibilidadNecesaria = disponibilidadNecesaria;
    }

    public String getNivelExperiencia() {
        return nivelExperiencia;
    }

    public void setNivelExperiencia(String nivelExperiencia) {
        this.nivelExperiencia = nivelExperiencia;
    }

    public String getCompetenciasClave() {
        return competenciasClave;
    }

    public void setCompetenciasClave(String competenciasClave) {
        this.competenciasClave = competenciasClave;
    }

    public String getDescripcionDetallada() {
        return descripcionDetallada;
    }

    public void setDescripcionDetallada(String descripcionDetallada) {
        this.descripcionDetallada = descripcionDetallada;
    }
}



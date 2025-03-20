package es.upm.dit.isst.agileICT.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombreEmpresa;

    @Column(length = 9) // Máximo 9 caracteres 
    private String cif;

    private String email;

    @Column(length = 15) // Máximo 15 caracteres (con código internacional)
    private String telefono;

    private String direccion;

    @Lob // Indica que se almacenará como TEXT en la BD
    @Column(columnDefinition = "TEXT")
    private String descripcion;

    @NotNull
    @Size(min = 8) // Requiere al menos 8 caracteres
    private String password;
    
    private String plan;

    // Constructor vacío
    public Company() {
    }

    // Constructor con parámetros
    public Company(String nombreEmpresa, String cif, String email, String telefono, String direccion, String descripcion, String password) {
        this.nombreEmpresa = nombreEmpresa;
        this.cif = cif;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.password = password;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombreEmpresa() { return nombreEmpresa; }
    public void setNombreEmpresa(String nombreEmpresa) { this.nombreEmpresa = nombreEmpresa; }

    public String getCif() { return cif; }
    public void setCif(String cif) { this.cif = cif; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }

    public String getDireccion() { return direccion; }
    public void setDireccion(String direccion) { this.direccion = direccion; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getPlan() { return plan; }
    public void setPlan(String plan) { this.plan = plan; }
}

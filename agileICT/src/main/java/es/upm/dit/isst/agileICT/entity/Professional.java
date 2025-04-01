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
@Table(name = "professionals")
public class Professional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String apellidos;

    private String email;

    @Column(length = 15) // Máximo 15 caracteres (con código internacional)
    private String telefono;

    @Lob // Almacena cadenas largas
    @Column(columnDefinition = "TEXT")
    private String estudios;

    // Campo numérico: eliminamos @Lob y columnDefinition ya que no es necesario para enteros
    private int experiencia;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String especialidad;
    
    @Lob
    @Column(columnDefinition = "TEXT")
    private String descripcion;
    
    @NotNull
    @Size(min = 8) // Requiere al menos 8 caracteres
    private String password;

    @Column(name = "recibir_ofertas")
    private boolean recibirOfertas;

    // Constructor vacío
    public Professional() {
    }

    // Constructor con parámetros (sin el campo recibirOfertas, ya que no se recibe en el constructor)
    public Professional(String nombre, String apellidos, String email, String telefono, String estudios, int experiencia, String especialidad, String descripcion, String password) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.estudios = estudios;
        this.experiencia = experiencia;
        this.especialidad = especialidad;
        this.descripcion = descripcion;
        this.password = password;
    }

    // Getters y Setters

    public Long getId() { 
        return id; 
    }
    public void setId(Long id) { 
        this.id = id; 
    }

    public String getNombre() { 
        return nombre; 
    }
    public void setNombre(String nombre) { 
        this.nombre = nombre; 
    }

    public String getApellidos() { 
        return apellidos; 
    }
    public void setApellidos(String apellidos) { 
        this.apellidos = apellidos; 
    }

    public String getEmail() { 
        return email; 
    }
    public void setEmail(String email) { 
        this.email = email; 
    }

    public String getTelefono() { 
        return telefono; 
    }
    public void setTelefono(String telefono) { 
        this.telefono = telefono; 
    }

    public String getEstudios() { 
        return estudios; 
    }
    public void setEstudios(String estudios) { 
        this.estudios = estudios; 
    }

    public int getExperiencia() { 
        return experiencia; 
    }
    public void setExperiencia(int experiencia) { 
        this.experiencia = experiencia; 
    }

    public String getEspecialidad() { 
        return especialidad; 
    }
    public void setEspecialidad(String especialidad) { 
        this.especialidad = especialidad; 
    }

    public String getDescripcion() { 
        return descripcion; 
    }
    public void setDescripcion(String descripcion) { 
        this.descripcion = descripcion; 
    }

    public String getPassword() { 
        return password; 
    }
    public void setPassword(String password) { 
        this.password = password; 
    }

    public boolean isRecibirOfertas() { 
        return recibirOfertas; 
    }
    public void setRecibirOfertas(boolean recibirOfertas) { 
        this.recibirOfertas = recibirOfertas; 
    }
}
package es.upm.dit.isst.agileICT.controller;

import java.util.HashMap;
import java.util.Optional;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.agileICT.entity.Professional;
import es.upm.dit.isst.agileICT.repository.ProfessionalRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/professionals")
public class ProfessionalController {

    private final ProfessionalRepository professionalRepository;

    public ProfessionalController(ProfessionalRepository professionalRepository) {
        this.professionalRepository = professionalRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerProfessional(@RequestBody Professional professional) {
        // Verificar si el email ya está registrado
        if (professionalRepository.findByEmail(professional.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El email ya está en uso");
        }

        // Guardar el profesional en la base de datos
        professional.setId(null); // Asegurar que se genere un nuevo ID
        Professional savedProfessional = professionalRepository.save(professional);
        savedProfessional.setPassword(null); // No devolver la contraseña

        // Crear la respuesta con el tipo y el usuario
        Map<String, Object> response = new HashMap<>();
        response.put("tipo", "profesional");
        response.put("usuario", savedProfessional);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Professional> getProfessional(@PathVariable Long id) {
        Optional<Professional> optional = professionalRepository.findById(id);
        if (optional.isPresent()) {
            return ResponseEntity.ok(optional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint para actualizar el perfil (actualización parcial)
    // @PutMapping("/{id}")
    // public ResponseEntity<Professional> updateProfessional(
    // @PathVariable Long id,
    // @RequestBody Professional updatedData) {

    // Optional<Professional> optional = professionalRepository.findById(id);
    // if (!optional.isPresent()) {
    // return ResponseEntity.notFound().build();
    // }

    // Professional professional = optional.get();

    // if (updatedData.getNombre() != null) {
    // professional.setNombre(updatedData.getNombre());
    // }
    // if (updatedData.getApellidos() != null) {
    // professional.setApellidos(updatedData.getApellidos());
    // }
    // if (updatedData.getEmail() != null) {
    // professional.setEmail(updatedData.getEmail());
    // }
    // if (updatedData.getTelefono() != null) {
    // professional.setTelefono(updatedData.getTelefono());
    // }
    // if (updatedData.getEstudios() != null) {
    // professional.setEstudios(updatedData.getEstudios());
    // }
    // // Para el campo experiencia se asume que 0 indica "no actualizar"
    // if (updatedData.getExperiencia() != 0) {
    // professional.setExperiencia(updatedData.getExperiencia());
    // }
    // if (updatedData.getEspecialidad() != null) {
    // professional.setEspecialidad(updatedData.getEspecialidad());
    // }
    // if (updatedData.getDescripcion() != null) {
    // professional.setDescripcion(updatedData.getDescripcion());
    // }
    // if (updatedData.getPassword() != null) {
    // professional.setPassword(updatedData.getPassword());
    // }
    // // Actualizamos el campo booleano directamente
    // professional.setRecibirOfertas(updatedData.isRecibirOfertas());

    // professionalRepository.save(professional);
    // return ResponseEntity.ok(professional);
    // }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProfessional(
            @PathVariable Long id,
            @RequestBody Professional updatedData) {

        Optional<Professional> optional = professionalRepository.findById(id);
        if (!optional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Professional professional = optional.get();

        if (updatedData.getNombre() != null) {
            professional.setNombre(updatedData.getNombre());
        }
        if (updatedData.getApellidos() != null) {
            professional.setApellidos(updatedData.getApellidos());
        }
        if (updatedData.getEmail() != null) {
            professional.setEmail(updatedData.getEmail());
        }
        if (updatedData.getTelefono() != null) {
            professional.setTelefono(updatedData.getTelefono());
        }
        if (updatedData.getEstudios() != null) {
            professional.setEstudios(updatedData.getEstudios());
        }
        // Para el campo experiencia se asume que 0 indica "no actualizar"
        if (updatedData.getExperiencia() != 0) {
            professional.setExperiencia(updatedData.getExperiencia());
        }
        if (updatedData.getEspecialidad() != null) {
            professional.setEspecialidad(updatedData.getEspecialidad());
        }
        if (updatedData.getDescripcion() != null) {
            professional.setDescripcion(updatedData.getDescripcion());
        }
        if (updatedData.getPassword() != null) {
            professional.setPassword(updatedData.getPassword());
        }
        // Actualizamos el campo booleano directamente
        professional.setRecibirOfertas(updatedData.isRecibirOfertas());

        Professional updatedProfessional = professionalRepository.save(professional);
        updatedProfessional.setPassword(null); // No devolver la contraseña

        // Estructurar la respuesta como en el registro
        Map<String, Object> response = new HashMap<>();
        response.put("tipo", "profesional");
        response.put("usuario", updatedProfessional);

        return ResponseEntity.ok(response);
    }

}
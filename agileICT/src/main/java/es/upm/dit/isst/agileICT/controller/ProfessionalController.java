package es.upm.dit.isst.agileICT.controller;

import java.util.Optional;

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
    public ResponseEntity<Professional> registerProfessional(@RequestBody Professional professional) {
        // Aquí también puedes incluir validaciones y manejo de la contraseña
        Professional savedProfessional = professionalRepository.save(professional);
        return new ResponseEntity<>(savedProfessional, HttpStatus.CREATED);
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

    // NUEVO: ACTUALIZAR PERFIL POR ID
    @PutMapping("/{id}")
    public ResponseEntity<Professional> updateProfessional(
            @PathVariable Long id,
            @RequestBody Professional updatedData) {

        Optional<Professional> optional = professionalRepository.findById(id);
        if (!optional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Professional professional = optional.get();

        // Actualizar campos
        professional.setNombre(updatedData.getNombre());
        professional.setApellidos(updatedData.getApellidos());
        professional.setEmail(updatedData.getEmail());
        professional.setTelefono(updatedData.getTelefono());
        professional.setEstudios(updatedData.getEstudios());
        professional.setExperiencia(updatedData.getExperiencia());
        professional.setEspecialidad(updatedData.getEspecialidad());
        professional.setDescripcion(updatedData.getDescripcion());
        professional.setPassword(updatedData.getPassword());
        professional.setRecibirOfertas(updatedData.isRecibirOfertas());

        professionalRepository.save(professional);
        return ResponseEntity.ok(professional);
    }
}
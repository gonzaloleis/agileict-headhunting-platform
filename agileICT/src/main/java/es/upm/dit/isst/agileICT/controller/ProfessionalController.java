package es.upm.dit.isst.agileICT.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
}

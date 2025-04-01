package es.upm.dit.isst.agileICT.controller;

import es.upm.dit.isst.agileICT.entity.Professional;
import es.upm.dit.isst.agileICT.entity.Company;
import es.upm.dit.isst.agileICT.repository.ProfessionalRepository;
import es.upm.dit.isst.agileICT.repository.CompanyRepository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private ProfessionalRepository professionalRepository;

    @Autowired
    private CompanyRepository companyRepository;

    // @PostMapping
    // public String login(@RequestParam String email, @RequestParam String
    // password) {
    // Professional professional = professionalRepository.findByEmail(email);
    // if (professional != null && professional.getPassword().equals(password)) {
    // return "profesional";
    // }

    // Company company = companyRepository.findByEmail(email);
    // if (company != null && company.getPassword().equals(password)) {
    // return "empresa";
    // }

    // return "error";
    // }
    @PostMapping
    public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
        Professional professional = professionalRepository.findByEmail(email);
        if (professional != null && professional.getPassword().equals(password)) {
            professional.setPassword(null); // Eliminar la contraseña antes de enviarla

            // Crear respuesta con el usuario y el tipo
            Map<String, Object> response = new HashMap<>();
            response.put("tipo", "profesional");
            response.put("usuario", professional);

            return ResponseEntity.ok(response);
        }

        Company company = companyRepository.findByEmail(email);
        if (company != null && company.getPassword().equals(password)) {
            company.setPassword(null);

            Map<String, Object> response = new HashMap<>();
            response.put("tipo", "empresa");
            response.put("usuario", company);

            return ResponseEntity.ok(response);
        }

        return ResponseEntity.status(401).body("error");
    }
}
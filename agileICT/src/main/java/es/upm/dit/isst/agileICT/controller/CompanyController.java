package es.upm.dit.isst.agileICT.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.agileICT.repository.CompanyRepository;

import es.upm.dit.isst.agileICT.entity.Company;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/companies")
public class CompanyController {

    private final CompanyRepository companyRepository;

    public CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    // @PostMapping("/register")
    // public ResponseEntity<Company> registerCompany(@RequestBody Company company) {
    //     // Aquí puedes agregar validaciones, encriptar la contraseña, etc.
    //     Company savedCompany = companyRepository.save(company);
    //     return new ResponseEntity<>(savedCompany, HttpStatus.CREATED);
    // }
    @PostMapping("/register")
    public ResponseEntity<?> registerCompany(@RequestBody Company company) {
        // Verificar si el email ya está registrado
        if (companyRepository.findByEmail(company.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El email ya está en uso");
        }

        // Guardar la empresa en la base de datos
        company.setId(null); // Asegurarse de que se genera un ID nuevo
        Company savedCompany = companyRepository.save(company);
        savedCompany.setPassword(null); // No devolver la contraseña

        // Crear la respuesta con el tipo y la empresa
        Map<String, Object> response = new HashMap<>();
        response.put("tipo", "empresa");
        response.put("usuario", savedCompany);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}

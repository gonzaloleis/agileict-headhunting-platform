package es.upm.dit.isst.agileICT.controller;

import es.upm.dit.isst.agileICT.entity.Professional;
import es.upm.dit.isst.agileICT.entity.Company;
import es.upm.dit.isst.agileICT.repository.ProfessionalRepository;
import es.upm.dit.isst.agileICT.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private ProfessionalRepository professionalRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @PostMapping
    public String login(@RequestParam String email, @RequestParam String password) {
        Professional professional = professionalRepository.findByEmail(email);
        if (professional != null && professional.getPassword().equals(password)) {
            return "profesional";
        }

        Company company = companyRepository.findByEmail(email);
        if (company != null && company.getPassword().equals(password)) {
            return "empresa";
        }

        return "error";
    }
}
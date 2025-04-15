package es.upm.dit.isst.agileICT.controller;

import es.upm.dit.isst.agileICT.entity.Busqueda;
import es.upm.dit.isst.agileICT.entity.Company;
import es.upm.dit.isst.agileICT.repository.BusquedaRepository;
import es.upm.dit.isst.agileICT.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/busquedas")
public class BusquedaController {

    @Autowired
    private BusquedaRepository busquedaRepository;
    
    @Autowired
    private CompanyRepository companyRepository;

    /**
     * Endpoint para registrar una búsqueda.
     * Parámetros: companyId (ID de la empresa) y descripcion (criterio de búsqueda).
     */
    @PostMapping("/registrar")
    public ResponseEntity<?> registrarBusqueda(
        @RequestParam Long companyId,
        @RequestParam String descripcion,  // Campo de criterio o título
        @RequestParam String tipoProfesional,
        @RequestParam String disponibilidadNecesaria,
        @RequestParam String nivelExperiencia,
        @RequestParam String competenciasClave,
        @RequestParam String descripcionDetallada) {
    
    Optional<Company> empresaOpt = companyRepository.findById(companyId);
    if (!empresaOpt.isPresent()) {
        return ResponseEntity.badRequest().body("No se encontró la empresa con el ID proporcionado");
    }
    Company company = empresaOpt.get();
    
    Busqueda busqueda = new Busqueda();
    busqueda.setDescripcion(descripcion);
    busqueda.setFechaBusqueda(LocalDateTime.now());
    busqueda.setCompany(company);
    busqueda.setTipoProfesional(tipoProfesional);
    busqueda.setDisponibilidadNecesaria(disponibilidadNecesaria);
    busqueda.setNivelExperiencia(nivelExperiencia);
    busqueda.setCompetenciasClave(competenciasClave);
    busqueda.setDescripcionDetallada(descripcionDetallada);
    
    busquedaRepository.save(busqueda);
    
    return ResponseEntity.ok("Búsqueda registrada exitosamente");
}
    
    /**
     * (Opcional) Endpoint para obtener todas las búsquedas registradas.
     * Este endpoint podría ser filtrado según las necesidades (por ejemplo, búsquedas relevantes
     * para el perfil del profesional que ha iniciado sesión).
     */
    @GetMapping
    public ResponseEntity<List<Busqueda>> listarBusquedas() {
        List<Busqueda> busquedas = busquedaRepository.findAll();
        return ResponseEntity.ok(busquedas);
    }
}


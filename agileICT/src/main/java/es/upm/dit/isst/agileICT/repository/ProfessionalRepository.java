package es.upm.dit.isst.agileICT.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.agileICT.entity.Professional;

@Repository
public interface ProfessionalRepository extends JpaRepository<Professional, Long> {
}

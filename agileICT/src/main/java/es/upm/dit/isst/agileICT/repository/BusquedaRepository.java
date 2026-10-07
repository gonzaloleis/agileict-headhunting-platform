package es.upm.dit.isst.agileICT.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import es.upm.dit.isst.agileICT.entity.Busqueda;

public interface BusquedaRepository extends JpaRepository<Busqueda, Long> {
}

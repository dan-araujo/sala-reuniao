package br.com.santander.fullstack.developer.sala.reuniao.repository;

import br.com.santander.fullstack.developer.sala.reuniao.model.Sala;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalaRepository extends JpaRepository<Sala, Long> {
}

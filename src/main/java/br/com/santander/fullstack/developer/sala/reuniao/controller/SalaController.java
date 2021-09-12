package br.com.santander.fullstack.developer.sala.reuniao.controller;

import br.com.santander.fullstack.developer.sala.reuniao.exception.ResourceNotFoundException;
import br.com.santander.fullstack.developer.sala.reuniao.model.Sala;
import br.com.santander.fullstack.developer.sala.reuniao.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class SalaController {

    @Autowired
    private SalaRepository salaRepository;

    @GetMapping("/salas")
    public List<Sala> getTodasAsSalas() {
        return salaRepository.findAll();
    }

    @GetMapping("/salas/{id}")
    public ResponseEntity<Sala> getSalaPorId(@PathVariable(value = "id") Long idSala)
            throws ResourceNotFoundException {
        Sala sala = salaRepository.findById(idSala)
                .orElseThrow(() -> new ResourceNotFoundException("Sala não encontrada: " + idSala));
        return ResponseEntity.ok().body(sala);
    }

    @PostMapping("/salas")
    public Sala criarSala(@Valid @RequestBody Sala sala) {
        return salaRepository.save(sala);
    }

    @PutMapping("/salas/{id}")
    public ResponseEntity<Sala> atualizarSala(@PathVariable(value = "id") Long idSala,
                                              @Valid @RequestBody Sala detalhesSala)
            throws ResourceNotFoundException {
        Sala sala = salaRepository.findById(idSala)
                .orElseThrow(() -> new ResourceNotFoundException("Sala não encontrada para esse id: " + idSala));

        sala.setNome(detalhesSala.getNome());
        sala.setDate(detalhesSala.getDate());
        sala.setHoraInicio(detalhesSala.getHoraInicio());
        sala.setHoraTermino(detalhesSala.getHoraTermino());
        final Sala atualizarSala = salaRepository.save(sala);
        return ResponseEntity.ok(atualizarSala);
    }

    @DeleteMapping("/salas/{id}")
    public Map<String, Boolean> deletarSala(@PathVariable(value = "id") Long idSala)
            throws ResourceNotFoundException {
        Sala sala = salaRepository.findById(idSala)
                .orElseThrow(() -> new ResourceNotFoundException("Sala não encontrada para esse id: " + idSala));

        salaRepository.delete(sala);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deletada", Boolean.TRUE);
        return response;


    }
}

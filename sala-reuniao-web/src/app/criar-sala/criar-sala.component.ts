import { SalaService } from '../sala.service';
import { Sala } from '../sala';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-sala',
  templateUrl: './criar-sala.component.html',
  styleUrls: ['./criar-sala.component.css']
})
export class CriarSalaComponent implements OnInit {

  sala: Sala = new Sala();
  submitted = false;

  constructor(private salaService: SalaService,
    private router: Router) { }

  ngOnInit() {
  }

  novaSala(): void {
    this.submitted = false;
    this.sala = new Sala();
  }

  save() {
    this.salaService.criarSala(this.sala)
      .subscribe(data => console.log(data), error => console.log(error));
    this.sala = new Sala();
    this.irParaLista();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  irParaLista() {
    this.router.navigate(['/salas']);
  }
}

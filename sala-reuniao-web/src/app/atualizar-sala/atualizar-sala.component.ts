import { Component, OnInit } from '@angular/core';
import { Sala } from '../sala';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaService } from '../sala.service';

@Component({
  selector: 'app-atualizar-sala',
  templateUrl: './atualizar-sala.component.html',
  styleUrls: ['./atualizar-sala.component.css']
})
export class AtualizarSalaComponent implements OnInit {

  id: number;
  sala: Sala;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private salaService: SalaService) { }

  ngOnInit() {
    this.sala = new Sala();

    this.id = this.route.snapshot.params['id'];

    this.salaService.getsala(this.id)
      .subscribe(dados => {
        console.log(dados)
        this.sala = dados;
      }, error => console.log(error));
  }

  atualizarSala() {
    this.salaService.atualizarSala(this.id, this.sala)
      .subscribe(dados => console.log(dados), error => console.log(error));
    this.sala = new Sala();
    this.irParaLista();
  }

  onSubmit() {
    this.atualizarSala();
  }

  irParaLista() {
    this.router.navigate(['/salas']);
  }
}

import { Observable } from "rxjs";
import { SalaService } from "../sala.service";
import { Sala } from "../sala";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-lista-salas",
  templateUrl: "./lista-salas.component.html",
  styleUrls: ["./lista-salas.component.css"]
})
export class ListaSalasComponent implements OnInit {
  salas: Observable<Sala[]>;

  constructor(private salaService: SalaService,
    private router: Router) { }

  ngOnInit() {
    this.recarregarDados();
  }

  recarregarDados() {
    this.salas = this.salaService.getListaSalas();
  }

  deletarSala(id: number) {
    this.salaService.deletarSala(id)
      .subscribe(
        dados => {
          console.log(dados);
          this.recarregarDados();
        },
        error => console.log(error));
  }

  detalhesSala(id: number) {
    this.router.navigate(['detalhes', id]);
  }

  atualizarSala(id: number) {
    this.router.navigate(['atualizar', id]);
  }
}

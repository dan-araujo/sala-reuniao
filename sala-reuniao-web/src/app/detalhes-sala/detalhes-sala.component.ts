import { Sala } from '../sala';
import { Component, OnInit, Input } from '@angular/core';
import { SalaService } from '../sala.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-sala',
  templateUrl: './detalhes-sala.component.html',
  styleUrls: ['./detalhes-sala.component.css']
})
export class DetalhesSalaComponent implements OnInit {

  id: number;
  sala: Sala;

  constructor(private route: ActivatedRoute, private router: Router,
    private salaService: SalaService) { }

  ngOnInit() {
    this.sala = new Sala();

    this.id = this.route.snapshot.params['id'];

    this.salaService.getsala(this.id)
      .subscribe(data => {
        console.log(data)
        this.sala = data;
      }, error => console.log(error));
  }

  listar() {
    this.router.navigate(['salas']);
  }
}

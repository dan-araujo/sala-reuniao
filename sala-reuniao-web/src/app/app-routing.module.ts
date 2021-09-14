import { CriarSalaComponent } from './criar-sala/criar-sala.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaSalasComponent } from './lista-salas/lista-salas.component';
import { AtualizarSalaComponent } from './atualizar-sala/atualizar-sala.component';
import { DetalhesSalaComponent } from './detalhes-sala/detalhes-sala.component';

const routes: Routes = [
  { path: '', redirectTo: 'salas', pathMatch: 'full' },
  { path: 'salas', component: ListaSalasComponent },
  { path: 'adicionar', component: CriarSalaComponent },
  { path: 'atualizar/:id', component: AtualizarSalaComponent },
  { path: 'detalhes/:id', component: DetalhesSalaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

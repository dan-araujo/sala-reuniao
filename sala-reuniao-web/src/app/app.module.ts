import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarSalaComponent } from './criar-sala/criar-sala.component';
import { ListaSalasComponent } from './lista-salas/lista-salas.component';
import { HttpClientModule } from '@angular/common/http';
import { AtualizarSalaComponent } from './atualizar-sala/atualizar-sala.component';
import { DetalhesSalaComponent } from './detalhes-sala/detalhes-sala.component';
@NgModule({
  declarations: [
    AppComponent,
    CriarSalaComponent,
    AtualizarSalaComponent,
    DetalhesSalaComponent,
    ListaSalasComponent,
    ListaSalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

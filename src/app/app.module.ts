import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { TrabajosComponent } from './paginas/trabajos/trabajos.component';
import { ServicioComponent } from './paginas/servicio/servicio.component';
import { EquipoComponent } from './paginas/equipo/equipo.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { TablaComponent } from './elementos/tabla/tabla.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TrabajosComponent,
    ServicioComponent,
    EquipoComponent,
    PaginaNoEncontradaComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatePipe } from '@angular/common';
import { ChunkPipe } from 'src/app/shared/pipes/chunk-pipe';


@NgModule({
  declarations: [
    ListaPeliculasComponent,
    ChunkPipe
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    SharedModule,
    DatePipe
  ],
  providers: [
    DatePipe
  ]
})
export class PeliculasModule { }

import { Component, OnInit } from '@angular/core';
import { PeliculasModule } from '../../peliculas.module';
import { PeliculasService } from 'src/app/shared/services/peliculas.service';
import { Pelicula } from 'src/app/shared/models/pelicula';
import { Genero } from 'src/app/shared/models/generos';
import { PageEvent } from 'src/app/shared/models/page-event';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css'
})
export class ListaPeliculasComponent implements OnInit{

  totalPeliculas?: number;
  peliculas?: Pelicula[];
  generos?: Genero[];
  first = 0;
  rows = 20;
  page = 1;

  constructor(private peliculasService: PeliculasService) {
    this.getPeliculasPopulares(this.page);
    this.getAllGeneros();
  }

  ngOnInit(): void {
    
  }

  getPeliculasPopulares(page: number = 1){
    this.peliculasService.getPopularMovies(page).subscribe(peliculas => {
      this.totalPeliculas = peliculas.total_results;
      this.peliculas = peliculas.results;
      console.log(this.peliculas)
    })
  }

  getAllGeneros(){
    this.peliculasService.getGeneros().subscribe(generos =>{
      this.generos = generos.genres
      console.log(this.generos)

    })
  }

  getNombreGenero(generoId: number) {
    return this.generos!.find(x => x.id == generoId)?.name;
  }

  onPageChange(event: any) {
    console.log(event)
    this.page = event.page + 1;
    this.first = event.first;
    this.rows = event.rows;
    this.getPeliculasPopulares(this.page)
  }

  redondearValoracion(valoracion: number){
    return Math.round(valoracion * 10) / 10;
  }

}

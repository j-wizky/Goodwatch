import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDetalle } from 'src/app/shared/models/pelicula-detalle';
import { PeliculasService } from 'src/app/shared/services/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export class DetallePeliculaComponent implements OnInit{

  peliculaId?: number;
  peliculaDetalle?: PeliculaDetalle;

  constructor(
    private activeRoute: ActivatedRoute,
    private peliculaService: PeliculasService
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams
      .subscribe(params => {
        this.peliculaId = params['id'];
        if(this.peliculaId !== null){
          this.cargarDetallePelicula()
        }
      }
    );
  }

  cargarDetallePelicula(){
    this.peliculaService.getDetallePeliculaPorId(this.peliculaId!).subscribe(detalle =>{
      this.peliculaDetalle = detalle;
      console.log(this.peliculaDetalle)
    })
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/Core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private baseService: BaseService) { }

  getPopularMovies(page: number = 1): Observable<any> {
    const params = new HttpParams()
      .set('language', 'es-ES')  // Idioma
      .set('page', page.toString());  // Página de resultados


      return this.baseService.get(this.apiUrl, "movie/popular", params);
  }

  getGeneros(): Observable<any>{
    const params = new HttpParams()
      .set('language', 'es-ES')  // Idioma

    return this.baseService.get(this.apiUrl, "genre/movie/list", params)
  }
}

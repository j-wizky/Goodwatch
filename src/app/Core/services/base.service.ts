import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGVkZjUwZDVmYmY0YzZhNzUwM2Q3YTdjOTIzZTkwOCIsIm5iZiI6MTczMTc2OTg1OS45MDUyMzc0LCJzdWIiOiI2NzM4YTRmOTZhMDJhMjRkN2IyMTU1NDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.98Dxz5euNvUzgqISAA3u5KFrqa4hW7ijzgyO2tdHgI0"
  headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: `Bearer ${this.accessToken}`,
  });

  constructor(private http: HttpClient) { }

  get<T>(url: string, action: string, params: HttpParams = new HttpParams()): Observable<T>{
    return this.http.get<T>(`${url}/${action}`, { headers: this.headers, params: params})
  }
}

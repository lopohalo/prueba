import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class TareasConsultaService {
  private urlAPI: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTareas(): Observable<any> {
    return this.http.get<any>(`${this.urlAPI}`).pipe(
      tap((response) => {
        if (response.ok) {
        } else {
        }
      }),
      catchError((err: HttpErrorResponse) => {
        console.error('Error:', err);
        return [];
      })
    );
  }
}
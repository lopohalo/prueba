import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/enviroments/enviroment';

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

  crearTarea(data: any): Observable<any> {
    return this.http.post<any>(`${this.urlAPI}`, data).pipe(
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

  actualizarTarea(id: number, data: any): Observable<any> {
    console.log(id);
    return this.http.put<any>(`${this.urlAPI}/${id}`, data).pipe(
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

  EliminarPost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlAPI}/${id}`).pipe(
      tap((response) => {
        if (response.ok) return response;
      }),
      catchError((err) => {
        if (err) return err;
        return [];
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs'; // Importa BehaviorSubject
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlAPI: string = environment.apiUrl;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Inicializa el BehaviorSubject con un valor booleano

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<void> {
    // Lógica para el inicio de sesión
    // Almacena el estado de autenticación en el almacenamiento local
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', username);
    this.isAuthenticatedSubject.next(true); // Actualiza el estado de autenticación
    return Observable.create((observer:any) => {
      observer.next();
      observer.complete();
    });
  }

  logout(): void {
    // Lógica para cerrar sesión
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedSubject.next(false); // Actualiza el estado de autenticación
  }

  isAuthenticated(): boolean {
    // Verifica tanto el BehaviorSubject como el valor en el almacenamiento local
    return this.isAuthenticatedSubject.value || localStorage.getItem('isAuthenticated') === 'true';
  }
}
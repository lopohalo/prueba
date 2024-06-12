import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.scss']
})
export class MenuComponent {
  opened = false;
  menuItems = ['Tareas'];

  toggleSidenav() {
    this.opened =!this.opened;
  }
  accion1() {
    console.log('Acción 1 seleccionada');
  }

  accion2() {
    console.log('Acción 2 seleccionada');
  }

  accion3() {
    console.log('Acción 3 seleccionada');
  }
}
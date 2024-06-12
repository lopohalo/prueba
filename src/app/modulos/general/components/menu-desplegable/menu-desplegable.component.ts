import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.scss']
})
export class MenuComponent{
  opened = false;
  menuItems = ['Tareas'];
  username = localStorage.getItem('username');

  toggleSidenav() {
    this.opened =!this.opened;
  }
}
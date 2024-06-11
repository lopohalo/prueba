import { Component, OnInit } from '@angular/core';
import { TareasConsultaService } from '../services/tareas-consulta.service';


@Component({
    selector: 'app-basegeneral',
    templateUrl: './basegeneral.component.html',
    styleUrls: ['./basegeneral.component.scss']
})
export class BasegeneralComponent implements OnInit {
    constructor(private TareasConsultaService: TareasConsultaService) {
    }

    ngOnInit(): void {
        this.consultarTareas();
    }

    consultarTareas() {
      this.TareasConsultaService.getTareas().subscribe((response) => {
        console.log(response);
      })
    }
}
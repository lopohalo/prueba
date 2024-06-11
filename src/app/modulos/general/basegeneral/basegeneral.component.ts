import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { TareasConsultaService } from '../services/tareas-consulta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-basegeneral',
  templateUrl: './basegeneral.component.html',
  styleUrls: ['./basegeneral.component.scss'],
})
export class BasegeneralComponent implements OnInit {
    @Output() accionEliminarTareas = new EventEmitter<void>();
  dataTareas: any;
  constructor(private TareasConsultaService: TareasConsultaService) {}

  ngOnInit(): void {
    this.consultarTareas();
  }

  consultarTareas() {
    this.TareasConsultaService.getTareas().subscribe((response) => {
      this.dataTareas = response;
    });
  }
  eliminarTarea(tarea: any) {
    this.TareasConsultaService.EliminarPost(tarea[0].id).subscribe(() => {
        Swal.fire({
            title: "eliminado!",
            text: "La tarea se ha eliminado con exito.",
            icon: "success"
          });
          this.dataTareas = this.dataTareas.filter(
            (x: any) => x.id !== tarea[0].id
          )
          this.accionEliminarTareas.emit();
      });
  }
}

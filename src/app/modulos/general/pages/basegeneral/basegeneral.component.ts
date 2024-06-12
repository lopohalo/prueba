import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { TareasConsultaService } from '../../services/tareas-consulta.service';

@Component({
  selector: 'app-basegeneral',
  templateUrl: './basegeneral.component.html',
  styleUrls: ['./basegeneral.component.scss'],
})
export class BasegeneralComponent implements OnInit {
  @Output() accionTareas = new EventEmitter<void>();
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
        title: 'eliminado!',
        text: 'La tarea se ha eliminado con exito.',
        icon: 'success',
      });
      this.dataTareas = this.dataTareas.filter(
        (x: any) => x.id !== tarea[0].id
      );
      this.accionTareas.emit();
    });
  }
  agregarTarea(tarea: any) {
    let param = {
    userId: 1,
    title: tarea.title,
    completed: tarea.status,
  };
  this.TareasConsultaService.crearTarea(param).subscribe((response: any) => {
    Swal.fire({
      title: 'Creada!',
      text: 'La tarea se ha creado con éxito.',
      icon: 'success',
    });
    
    this.dataTareas.push(response);
    this.accionTareas.emit();
  });
  }
  editarTarea(tarea: any) {
    let param = {
    userId: 1,
    title: tarea.title,
    completed: tarea.status,
  };
  this.TareasConsultaService.actualizarTarea(tarea.id,param).subscribe((response: any) => {
    Swal.fire({
      title: 'Editada!',
      text: 'La tarea se ha editado con éxito.',
      icon: 'success',
    });
   this.dataTareas.filter((x:any) => x.id == tarea.id)[0] = param
    this.accionTareas.emit();
  });
  }
}

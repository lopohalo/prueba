import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../interfas/tarea-modelo';
import Swal from 'sweetalert2';
import { ModalTablaComponent } from '../modales/modal-tabla/modal-tabla.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-tareas',
  templateUrl: './table-tareas.component.html',
  styleUrls: ['./table-tareas.component.scss'],
})
export class TableTareasComponent implements OnInit {
  @Input() dataTareas: Tarea[] = [];
  @Input() accionTareas: EventEmitter<void> = new EventEmitter<void>();
  @Output() eliminarTarea = new EventEmitter<any>();
  @Output() agregarTarea = new EventEmitter<any>();
  @Output() editarTarea = new EventEmitter<any>();
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  currentPage = 1;
  pageSize = 5;
  seleccionados: Tarea[] = [];
  dataTareasPaginated: any = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.accionTareas.subscribe(() => {
      this.consultarTabla();
    });
  }

  consultarTabla() {
    for (let index = 0; index < this.dataTareas.length; index++) {
      this.dataTareas[index].selected = false;
    }
    this.dataTareasPaginated = this.dataTareas.slice(0, this.pageSize);
    this.onPageChange({
      pageIndex: this.currentPage - 1,
      pageSize: this.pageSize,
    });
  }

  seleccionadosTabla(row: Tarea) {
    this.dataTareas.forEach((tarea: Tarea) => {
      if (row.id !== tarea.id) {
        tarea.selected = false;
      }
    });
    row.selected = !row.selected;

    if (row.selected) {
      this.seleccionados = [row];
    } else {
      this.seleccionados = [];
    }
  }

  editTask(task: Tarea): void {}

  eliminarSeleccion(): void {
    Swal.fire({
      title: 'Esta seguro de eliminar esta tarea?',
      text: 'No podra revertir esta operación!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarTarea.emit(this.seleccionados);
      }
    });
  }

  openDialog(event: string) {
    const dialogRef = this.dialog.open(ModalTablaComponent, {
      panelClass: 'my-custom-dialog',
      data: { seleccionados: this.seleccionados, titulo: event },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(event === 'Editar'){
        this.seleccionados[0].title = result.value.title;
        this.seleccionados[0].completed = result.value.status;
        this.editarTarea.emit(this.seleccionados[0]);
      } else{
        this.agregarTarea.emit(result.value);
      }
    });
  }
  onPageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.dataTareasPaginated = this.dataTareas.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  onSort(event: any) {
    this.dataTareas.sort((a: any, b: any) => {
      const isAsc = event.direction === 'asc';
      switch (event.active) {
        case 'userId':
          return isAsc ? a.userId - b.userId : b.userId - a.userId;
        case 'id':
          return isAsc ? a.id - b.id : b.id - a.id;
        case 'title':
          return isAsc
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        case 'completed':
          return isAsc
            ? Number(a.completed) - Number(b.completed)
            : Number(b.completed) - Number(a.completed);
        default:
          return 0;
      }
    });
    this.dataTareasPaginated = this.dataTareas.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../../interfas/tarea-modelo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-tareas',
  templateUrl: './table-tareas.component.html',
  styleUrls: ['./table-tareas.component.scss'],
})
export class TableTareasComponent implements OnInit {
  @Input() dataTareas: Tarea[] = [];
  @Input() accionEliminarTareas: EventEmitter<void> = new EventEmitter<void>();
  @Output() eliminarTarea = new EventEmitter<any>();
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  currentPage = 1;
  pageSize = 5;
  seleccionados: Tarea[] = [];
  dataTareasPaginated: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.consultarTabla();
    this.accionEliminarTareas.subscribe(() => {
      this.consultarTabla();
    });
  }

  consultarTabla() {
    for (let index = 0; index < this.dataTareas.length; index++) {
      this.dataTareas[index].selected = false;
    }
    this.dataTareasPaginated = this.dataTareas.slice(0, this.pageSize);
    console.log(this.dataTareasPaginated);
    this.onPageChange({
      pageIndex: this.currentPage - 1,
      pageSize: this.pageSize,
    });
  }

  seleccionadosTabla(row: Tarea) {
    this.dataTareas.forEach((tarea: Tarea) => {
      tarea.selected = false;
    });
    row.selected = true;
    this.seleccionados.push(row);
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
    // const dialogRef = this.dialog.open(ModalContentComponent, {
    //   width: '250px',
    //   data: { event: 'Información adicional' }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Modal cerrado');
    // });

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

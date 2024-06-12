import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModuleRoutingModule } from './general-module-routing.module';
import { BasegeneralComponent } from './basegeneral/basegeneral.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormTaskComponent } from './components/form-task/form-tareas.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TableTareasComponent } from './components/table-tareas/table-tareas.component';
import { ModalTablaComponent } from './components/modales/modal-tabla/modal-tabla.component';
import { MatDialogModule } from '@angular/material/dialog';

export const modals = [];

@NgModule({
  declarations: [
    BasegeneralComponent,
    FormTaskComponent,
    TableTareasComponent,
    ModalTablaComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GeneralModuleRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class GeneralModuleModule {}

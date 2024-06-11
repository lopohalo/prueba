import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModuleRoutingModule } from './general-module-routing.module';
import { BasegeneralComponent } from './basegeneral/basegeneral.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTaskComponent } from './components/form-task/form-tareas.component';

export const modals = [];

@NgModule({
  declarations: [BasegeneralComponent, FormTaskComponent],
  imports: [
    CommonModule,
    GeneralModuleRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class GeneralModuleModule {}

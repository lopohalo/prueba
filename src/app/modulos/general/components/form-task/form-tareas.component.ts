import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-tareas',
  templateUrl: './form-tareas.component.html',
  styleUrls: ['./form-tareas.component.scss'],
})
export class FormTaskComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  options = [
    { name: 'En progreso', value: 'progress' },
    { name: 'Completado', value: 'completed' },
    { name: 'Por hacer', value: 'todo' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildFormulario();
  }

  buildFormulario() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
}
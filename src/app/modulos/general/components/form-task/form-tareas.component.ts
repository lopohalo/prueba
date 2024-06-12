import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-tareas',
  templateUrl: './form-tareas.component.html',
  styleUrls: ['./form-tareas.component.scss'],
})
export class FormTaskComponent implements OnInit {
  @Output() form: EventEmitter<any> = new EventEmitter();
  formData: FormGroup | any;
  options = [
    { name: 'Completado', value: false },
    { name: 'Por hacer', value: true }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildFormulario();
  }

  buildFormulario() {
    this.formData = this.fb.group({
      title: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.form.emit(this.formData);
  }
}
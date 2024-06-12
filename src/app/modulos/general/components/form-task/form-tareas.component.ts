import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-tareas',
  templateUrl: './form-tareas.component.html',
  styleUrls: [],
})
export class FormTaskComponent implements OnInit {
  @Output() form: EventEmitter<any> = new EventEmitter();
  @Input() data: any;
  formData: FormGroup | any;
  options = [
    { name: 'Completado', value: true },
    { name: 'Por hacer', value: false }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if(this.data.titulo === 'Editar'){
      this.buildFormulario();
      this.setFormulario(this.data);
    } else{
      this.buildFormulario();
    }
  }

  buildFormulario() {
    this.formData = this.fb.group({
      title: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.form.emit(this.formData);
  }

  setFormulario(data: any) {
    this.formData.controls.title.setValue(data.seleccionados[0].title);
    this.formData.controls.status.setValue(data.seleccionados[0].completed);
  }
}
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormTaskComponent } from "./form-tareas.component";

describe("FormTaskComponent", () => {
  let component: FormTaskComponent;
  let fixture: ComponentFixture<FormTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormTaskComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

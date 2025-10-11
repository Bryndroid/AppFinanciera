import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstado } from './form-estado';

describe('FormEstado', () => {
  let component: FormEstado;
  let fixture: ComponentFixture<FormEstado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEstado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEstado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionIngresos } from './gestion-ingresos';

describe('GestionIngresos', () => {
  let component: GestionIngresos;
  let fixture: ComponentFixture<GestionIngresos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionIngresos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionIngresos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoFinanciero } from './estado-financiero';

describe('EstadoFinanciero', () => {
  let component: EstadoFinanciero;
  let fixture: ComponentFixture<EstadoFinanciero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoFinanciero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoFinanciero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

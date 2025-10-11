import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorroInteligente } from './ahorro-inteligente';

describe('AhorroInteligente', () => {
  let component: AhorroInteligente;
  let fixture: ComponentFixture<AhorroInteligente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhorroInteligente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhorroInteligente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

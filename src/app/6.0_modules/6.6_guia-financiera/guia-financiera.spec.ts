import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaFinanciera } from './guia-financiera';

describe('GuiaFinanciera', () => {
  let component: GuiaFinanciera;
  let fixture: ComponentFixture<GuiaFinanciera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaFinanciera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiaFinanciera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

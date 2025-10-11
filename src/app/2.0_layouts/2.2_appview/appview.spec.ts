import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appview } from './appview';

describe('Appview', () => {
  let component: Appview;
  let fixture: ComponentFixture<Appview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

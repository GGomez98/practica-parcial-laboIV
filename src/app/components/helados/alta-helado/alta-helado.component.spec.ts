import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaHeladoComponent } from './alta-helado.component';

describe('AltaHeladoComponent', () => {
  let component: AltaHeladoComponent;
  let fixture: ComponentFixture<AltaHeladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaHeladoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

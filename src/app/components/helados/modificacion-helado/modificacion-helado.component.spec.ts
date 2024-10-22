import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionHeladoComponent } from './modificacion-helado.component';

describe('ModificacionHeladoComponent', () => {
  let component: ModificacionHeladoComponent;
  let fixture: ComponentFixture<ModificacionHeladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificacionHeladoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaHeladoComponent } from './baja-helado.component';

describe('BajaHeladoComponent', () => {
  let component: BajaHeladoComponent;
  let fixture: ComponentFixture<BajaHeladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaHeladoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

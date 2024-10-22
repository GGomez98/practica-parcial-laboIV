import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRepartidoresComponent } from './info-repartidores.component';

describe('InfoRepartidoresComponent', () => {
  let component: InfoRepartidoresComponent;
  let fixture: ComponentFixture<InfoRepartidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRepartidoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

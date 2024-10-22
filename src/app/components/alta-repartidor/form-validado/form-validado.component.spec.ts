import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidadoComponent } from './form-validado.component';

describe('FormValidadoComponent', () => {
  let component: FormValidadoComponent;
  let fixture: ComponentFixture<FormValidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

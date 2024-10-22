import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlumnoService } from '../../servicios/alumno/alumno.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.scss'
})
export class BienvenidaComponent {
  subscription!:Subscription;
  alumno: any;
  cargando: boolean = true;

  constructor(private alumnoService: AlumnoService){}

  ngOnInit(){
    this.subscription = this.alumnoService.getAlumno()
    .subscribe(
      alumno => {
        this.alumno = alumno
        console.log(this.alumno);
        this.cargando = false;
      });
  }
}

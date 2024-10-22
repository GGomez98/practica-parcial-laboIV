import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaisesService } from '../../../servicios/paises/paises.service';

@Component({
  selector: 'app-listado-paises',
  standalone: true,
  imports: [],
  templateUrl: './listado-paises.component.html',
  styleUrl: './listado-paises.component.scss'
})
export class ListadoPaisesComponent {
  @Output() elegirPais = new EventEmitter <any> ();
  @Input() paises: any[] = [];
  subscription!:Subscription;
  selectedPais: any;

  ngOnInit(){
  }

  elegirPaisFn(pais:any){
    this.selectedPais = pais
    this.elegirPais.emit(pais);
  }

  isActive(pais: any) {
    return this.selectedPais === pais; // Devuelve true si el país es el seleccionado
  }
}

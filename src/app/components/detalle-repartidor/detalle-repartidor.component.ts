import { Component } from '@angular/core';
import { InfoPaisComponent } from './info-pais/info-pais.component';
import { InfoRepartidoresComponent } from './info-repartidores/info-repartidores.component';
import { ListadoPaisesComponent } from '../alta-repartidor/listado-paises/listado-paises.component';
import { ListadoRepartidoresComponent } from './listado-repartidores/listado-repartidores.component';

@Component({
  selector: 'app-detalle-repartidor',
  standalone: true,
  imports: [InfoPaisComponent, InfoRepartidoresComponent, ListadoRepartidoresComponent],
  templateUrl: './detalle-repartidor.component.html',
  styleUrl: './detalle-repartidor.component.scss'
})
export class DetalleRepartidorComponent {
  repartidor: any;

  actualizarRepartidor(repartidor: any) {
    this.repartidor = repartidor;
    console.log(this.repartidor);
  }
}

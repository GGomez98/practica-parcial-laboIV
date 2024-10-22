import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-repartidores',
  standalone: true,
  imports: [],
  templateUrl: './info-repartidores.component.html',
  styleUrl: './info-repartidores.component.scss'
})
export class InfoRepartidoresComponent {
  @Input() repartidor:any = null;
}

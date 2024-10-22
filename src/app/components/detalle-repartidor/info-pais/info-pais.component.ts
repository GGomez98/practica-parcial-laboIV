import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-pais',
  standalone: true,
  imports: [],
  templateUrl: './info-pais.component.html',
  styleUrl: './info-pais.component.scss'
})
export class InfoPaisComponent {
  @Input() repartidor:any = null;
}

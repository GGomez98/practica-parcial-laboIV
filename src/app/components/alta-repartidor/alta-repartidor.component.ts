import { Component, ViewChild} from '@angular/core';
import { FormValidadoComponent } from './form-validado/form-validado.component';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';
import { PaisesService } from '../../servicios/paises/paises.service';

@Component({
  selector: 'app-alta-repartidor',
  standalone: true,
  imports: [FormValidadoComponent,ListadoPaisesComponent],
  templateUrl: './alta-repartidor.component.html',
  styleUrl: './alta-repartidor.component.scss'
})
export class AltaRepartidorComponent {
  pais: any = null;
  subscription!: any;
  paises: any;
  listaPaises: any[] = [];

  constructor(private paisesService: PaisesService){}

  ngOnInit(){
    this.subscription = this.paisesService.getPaisesEuropa()
    .subscribe(
      paises => {
        this.paises = paises;
        let id = 1;
        this.paises.forEach((pais: any) => {
          this.listaPaises.push({"id":id,"nombre":pais.translations.spa.common,"bandera":pais.flags.png,"region":pais.region, "capital": pais.capital})
          id++;
        });
        this.listaPaises = this.listaPaises.sort((a,b)=>a.nombre.localeCompare(b.nombre));
        console.log(this.listaPaises);
      });
      this.subscription = this.paisesService.getPaisesAfrica()
    .subscribe(
      paises => {
        this.paises = paises;
        let id = 1;
        this.paises.forEach((pais: any) => {
          this.listaPaises.push({"id":id,"nombre":pais.translations.spa.common,"bandera":pais.flags.png,"region":pais.region, "capital": pais.capital})
          id++;
        });
        this.listaPaises = this.listaPaises.sort((a,b)=>a.nombre.localeCompare(b.nombre));
        console.log(this.listaPaises);
      });
  }

  actualizarPais(pais: any) {
    this.pais = pais;
    console.log(this.pais);
  }
}

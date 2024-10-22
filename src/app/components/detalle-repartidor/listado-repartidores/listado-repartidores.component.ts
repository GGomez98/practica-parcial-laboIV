import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { collection, Firestore, onSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-listado-repartidores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-repartidores.component.html',
  styleUrl: './listado-repartidores.component.scss'
})
export class ListadoRepartidoresComponent {
  @Output() elegirRepartidor = new EventEmitter <any> ();
  repartidores: any;
  repartidoresCargados: boolean = false;
  selectedRepartidor: any;

  constructor(private firestore: Firestore) {
  }

  ngOnInit(){
    this.obtenerHelados()
  }

  async obtenerHelados(){
    const query = collection(this.firestore, "repartidores");

    onSnapshot(query, (querySnapshot) => {
      this.repartidores = [];
      
      querySnapshot.forEach((doc) => {
        const repartidor = doc.data();
        this.repartidores.push(repartidor);
      });
      this.repartidoresCargados = true;
    });
  }

  elegirRepartidorFn(repartidor:any){
    this.selectedRepartidor = repartidor
    this.elegirRepartidor.emit(repartidor);
    console.log(repartidor);
  }

  isActive(repartidor: any) {
    return this.selectedRepartidor === repartidor; // Devuelve true si el país es el seleccionado
  }
}

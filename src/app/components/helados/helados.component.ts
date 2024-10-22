import { Component, Input, ViewChild } from '@angular/core';
import { AltaHeladoComponent } from './alta-helado/alta-helado.component';
import { BajaHeladoComponent } from './baja-helado/baja-helado.component';
import { ModificacionHeladoComponent } from './modificacion-helado/modificacion-helado.component';
import { collection, Firestore, getDocs, onSnapshot } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-helados',
  standalone: true,
  imports: [AltaHeladoComponent,BajaHeladoComponent,ModificacionHeladoComponent, CommonModule],
  templateUrl: './helados.component.html',
  styleUrl: './helados.component.scss'
})
export class HeladosComponent {
  @ViewChild(ModificacionHeladoComponent) modificar: ModificacionHeladoComponent | undefined;
  helados: any[] = [];
  heladosCargados: boolean = false;
  heladoSeleccionado: any;
  formHabilitado: boolean = false;

  constructor(private firestore: Firestore) {
  }

  ngOnInit(){
    this.obtenerHelados()
  }

  async obtenerHelados(){
    const heladosCollection = collection(this.firestore, 'helados');
    const heladosSnapshot = await getDocs(heladosCollection);
    this.helados = heladosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    this.heladosCargados = true;
  }

  seleccionarHelado(helado:any){
    this.heladoSeleccionado = {...helado};
    this.modificar?.habilitarFormulario();
    console.log(helado);
  }

  actualizarHelados() {
    this.obtenerHelados();
  }
}

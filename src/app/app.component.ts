import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { HeladosComponent } from './components/helados/helados.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import Swal from 'sweetalert2';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AltaRepartidorComponent, HeladosComponent, BienvenidaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practica_parcial_1';

  username = '';

  constructor(protected router: Router, protected auth: Auth, protected firestore: Firestore) {

  }

  goTo(path: string) {
    console.log(path);
    console.log(this.auth.currentUser)
    this.router.navigate([path]);
  }

  isLoggedOut(): boolean {
    return this.auth.currentUser == null;
  }

  logout() {
    Swal.fire({
      title: "¿Esta seguro que desea cerrar la sesión?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar Sesión",
      cancelButtonText: "Cancelar",
      background: '#fff',
      color: '#000',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.showLoading();
        this.auth.signOut();
        console.log('Logout successful');
        this.goTo('/');
      }
    });
  }
}

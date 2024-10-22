import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userMail: string = "";
  userPWD: string = "";
  loggedUser: string = "";
  flagError: boolean = false;
  msjError: string = "";

  constructor(public auth: Auth, private router: Router, private firestore: Firestore) {
  }

  Login() {
    Swal.fire({
      title: 'Cargando...',
      text: 'Por favor espera',
      allowOutsideClick: false,
      background: '#fff',
      color: '#000',
      didOpen: () => {
        Swal.showLoading();
      }
    });
    signInWithEmailAndPassword(this.auth, this.userMail, this.userPWD).then((res) => {
      Swal.close();
      if (res.user.email !== null) 
      this.router.navigate(['']);
      this.flagError = false;
    }).catch((e) => {
      Swal.close();
      this.flagError = true;

      console.log(e.code);
      switch (e.code) {
        case "auth/invalid-email":
          if(this.userMail==''){
            this.msjError = 'Por favor ingrese un mail'
          }
          else{
            this.msjError = 'El mail ingresado es invalido'
          }
          break;
        case "auth/invalid-credential":
          this.msjError = "Contraseña incorrecta";
          break;
        case "auth/missing-password":
          this.msjError = "Falta ingresar la contraseña";
          break;
        default:
          this.msjError = "Ocurrio un error inesperado"
          break;
      }

      Swal.fire({
        title: `${this.msjError}`,
        background: '#000',
        color: '#fff',
        confirmButtonColor: '#ff5722'
        })
    });
  }

  CompletarInputs(mail:string,pass:string) {
    this.userMail=mail;
    this.userPWD=pass;
  }
}

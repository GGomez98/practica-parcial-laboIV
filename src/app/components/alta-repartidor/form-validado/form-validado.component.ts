import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-validado',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-validado.component.html',
  styleUrl: './form-validado.component.scss'
})
export class FormValidadoComponent {
  @Input() set country(valor: any) {
    this.form.get('country')?.setValue(valor); 
  }
  form!: FormGroup;
  formularioEnviado: boolean = false;

  constructor(private firestore: Firestore) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl("", [Validators.pattern('^[a-zA-Z]+$'),Validators.required]),
      lastName: new FormControl("", [Validators.pattern('^[a-zA-Z]+$'),Validators.required]),
      age: new FormControl("",[Validators.min(18),Validators.max(99),Validators.required]),
      capTransport: new FormControl("",[Validators.min(1),Validators.max(100),Validators.required]),
      country: new FormControl('', Validators.required),
      ownUnit: new FormControl(false),
    });
  }

  async enviar(){
    this.formularioEnviado = true;
    if(this.form.valid){
      try {
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
        const col = collection(this.firestore, "repartidores");
        await addDoc(col, this.form.value);
        console.log('Documento agregado exitosamente!');
        this.form.reset({
          firstName: '',
          lastName: '',
          age: '',
          capTransport: '',
          country:'',
          ownUnit: false
        });
        Swal.close()
        Swal.fire({
          title: `El Repartidor se creo con exito`,
          background: '#fff',
          color: '#000',
          confirmButtonColor: '#ff5722'
          })
      } catch (error) {
        console.error('Error al agregar documento: ', error);
      }
      console.log("Se envio el formulario");
      this.formularioEnviado = false;
    }
    else{
      console.log('No se pudo enviar el formulario');
    }
  }

  get firstName(){
    return this.form.get('firstName')
  }
  get lastName(){
    return this.form.get('lastName')
  }
  get age(){
    return this.form.get('age')
  }
  get capTransport(){
    return this.form.get('capTransport')
  }
  get ownUnit(){
    return this.form.get('ownUnit')
  }
}

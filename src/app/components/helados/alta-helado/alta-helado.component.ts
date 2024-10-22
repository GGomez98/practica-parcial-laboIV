import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { addDoc, collection, Firestore, onSnapshot } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-helado',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './alta-helado.component.html',
  styleUrl: './alta-helado.component.scss'
})
export class AltaHeladoComponent {
  @Output() heladosActualizados = new EventEmitter<void>();
  form!: FormGroup;
  formularioEnviado: boolean = false;
  listaHelados: any[] = [];
  heladosCargados:boolean = false;

  constructor(private firestore: Firestore) {}

  ngOnInit(): void{
    this.form = new FormGroup({
      sabor: new FormControl('', Validators.required),
      tipo: new FormControl('Agua'),
      precio: new FormControl('', [Validators.min(1000),Validators.max(20000),Validators.required]),
      peso: new FormControl('', [Validators.min(250),Validators.max(1000),Validators.required]),
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
        const col = collection(this.firestore, "helados");
        await addDoc(col, this.form.value);
        this.heladosActualizados.emit();
        console.log('Documento agregado exitosamente!');
        this.form.reset({
          sabor: '',
          tipo: 'Agua',
          precio: '',
          peso: ''
        });
        Swal.close()
        Swal.fire({
          title: `El Helado se creo con exito`,
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

  get precio(){
    return this.form.get('precio')
  }

  get peso(){
    return this.form.get('peso')
  }
}

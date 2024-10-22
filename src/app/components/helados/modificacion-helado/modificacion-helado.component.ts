import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output, SimpleChanges } from '@angular/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificacion-helado',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './modificacion-helado.component.html',
  styleUrl: './modificacion-helado.component.scss'
})
export class ModificacionHeladoComponent {
  form!: FormGroup;
  formularioEnviado: boolean = false;
  @Input() helado:any;
  @Output() heladosActualizados = new EventEmitter<void>();

  constructor(private firestore: Firestore){}

  ngOnInit(): void{
    console.log(this.helado)
    this.form = new FormGroup({
      tipo: new FormControl('Agua'),
      precio: new FormControl('', [Validators.min(1000),Validators.max(20000),Validators.required]),
      peso: new FormControl('', [Validators.min(250),Validators.max(1000),Validators.required]),
      id: new FormControl('')
    });
    this.habilitarFormulario();
  }

  habilitarFormulario(){
    if(this.helado){
      this.form.enable()
    }
    else{
      this.form.disable()
    }
  }

  async modificarHelado(){
    if(this.form.valid){
      const heladoData = {
        ...this.form.getRawValue()
      };

      const heladoDoc = doc(this.firestore, `helados/${this.helado.id}`);
      await updateDoc(heladoDoc, heladoData);
      this.heladosActualizados.emit();
      this.form.reset();
      this.form.disable();
    }
  }

  get precio(){
    return this.form.get('precio')
  }

  get peso(){
    return this.form.get('peso')
  }
}

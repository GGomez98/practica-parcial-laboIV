import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-baja-helado',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './baja-helado.component.html',
  styleUrl: './baja-helado.component.scss'
})
export class BajaHeladoComponent {
  @Input() helado:any;
  @Output() heladosActualizados = new EventEmitter<void>();
  form!: FormGroup;
  formularioEnviado: boolean = false;

  constructor(private firestore: Firestore) {}

  ngOnInit(): void{
    this.form = new FormGroup({
      tipo: new FormControl('Agua'),
      precio: new FormControl('', [Validators.min(1000),Validators.max(20000),Validators.required]),
      peso: new FormControl('', [Validators.min(250),Validators.max(1000),Validators.required]),
    });
    this.form.disable();
  }

  async eliminarHelado(){
    const heladoDoc = doc(this.firestore, `helados/${this.helado.id}`);
    this.heladosActualizados.emit();
    this.form.reset();  
    await deleteDoc(heladoDoc);
  }

  get precio(){
    return this.form.get('precio')
  }

  get peso(){
    return this.form.get('peso')
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem, IonInput, IonButton, IonIcon, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss'],
  standalone: true,
  imports: [IonText, IonIcon, IonButton, IonItem, IonList, IonInput, FormsModule]
})
export class ProductoFormComponent  implements OnInit {

  // definir variable para guardar el valor insertado en input
  productoStr:string = ""
  @Output() onCreate = new EventEmitter<string>()

  constructor() { 
    // agregar ícono + agregar producto a la lista
    addIcons({addCircleOutline});
  }

  ngOnInit() {}

  // crear método onClick
  // el productoStr lo tengo que vincular con el input en la plantilla
  onClick() {
    this.onCreate.emit(this.productoStr)
  }

}

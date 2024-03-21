import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './button-add.component.html',
})
export class ButtonAddComponent {
  contador : number = 0;

  add(){
    this,this.contador++;
  }


  diss(){
    this,this.contador--;
  }
}

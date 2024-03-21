import { Component,   OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './button.component.html',
})
export class CounterComponent {
  contador : number = 0;

  add(){
    this,this.contador++;
  }


  diss(){
    this,this.contador--;
  }
}

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './counter.component.html',
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

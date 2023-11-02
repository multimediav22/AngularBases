import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`<h3>Counter: {{counter}}</h3>
  <!-- Botón para aumentar el contador -->
  <button (click)="increaseBy(+1)" class="custom-button">+1</button>
  <!-- Botón para disminuir el contador -->
  <button (click)="decreaseBy()" class="custom-button">-1</button>
  <!-- Botón para Reset -->
  <button (click)="resetCounter()" class="custom-button">Reset</button>`
})

export class CounterComponent {
  // Declaración de las propiedades
  public title: string = 'Hello World'; // Una cadena de texto
  public counter: number = 10; // Un número entero

  // Método para aumentar el contador
  increaseBy(value: number): void {
    this.counter = this.counter + 1;
  }

  // Método para disminuir el contador
  decreaseBy(): void {
    this.counter = this.counter - 1;
  }
  resetCounter(): void {
    this.counter = 0; // Puedes establecerlo en el valor inicial que desees
  }
}

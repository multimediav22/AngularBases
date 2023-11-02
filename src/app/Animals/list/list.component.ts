import { Component } from '@angular/core';

@Component({
  selector: 'app-Animals-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public Animals: string[] = ['Dog', 'Cat', 'Cat2', 'Cat3', 'Cat4', 'Cat5'];
  public deletedAnimal?: string;

  removeLastAnimal(): void {
    this.deletedAnimal = this.Animals.pop();
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-petFoundation-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public petsList: Pet[] = [
    {
      name: 'Antonio',
      breed: 'Dog',
      Age: 7
    },
    {
      name: 'Manche',
      breed: 'Dog',
      Age: 5
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletePet(id?: string): void {
    if (!id) return;
    console.log({ id });

      this.onDelete.emit(id); //! Emitir el evento después de borrar
    }
  }


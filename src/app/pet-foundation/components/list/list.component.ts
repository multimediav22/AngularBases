import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-petFoundation-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() public petsList: Pet[] = [];
  @Output() public onDelete: EventEmitter<string> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {}

  onDeletePet(id?: string): void {
    if (!id) return;
    console.log({ id });

    this.onDelete.emit(id);
  }

  onImageChange(event: any, pet: Pet): void {
    const file = event.target.files[0];
    if (file) {
      // Lógica para manejar el archivo seleccionado y obtener la URL
      const imageUrl = URL.createObjectURL(file);
      pet.imageUrl = imageUrl;
      console.log('Imagen actualizada:', pet.imageUrl);
      // Forzar la detección de cambios
      this.cdr.detectChanges();
    }
  }
}

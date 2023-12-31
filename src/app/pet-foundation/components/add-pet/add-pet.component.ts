import { Component, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'app-add-pet-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  // Se define un EventEmitter para emitir eventos cuando se agrega una nueva mascota
  @Output() onNewPet: EventEmitter<Pet> = new EventEmitter<Pet>();

  // Se inicializa el objeto pet con valores predeterminados, incluyendo imageUrl
  public pet: Pet = {
    name: '',
    breed: '',
    Age: 0,
    imageUrl: '' // Agrega la propiedad imageUrl con un valor inicial vacío
  };

  // Propiedades para la imagen
  public selectedImageName: string | undefined;

  // Método para manejar el cambio de imagen
  onImageChange(event: any): void {
    // Lógica para manejar el cambio de imagen
    // Por ejemplo, puedes obtener el nombre de la imagen
    this.selectedImageName = event.target.files[0]?.name;
  }

  // Método para emitir el evento al agregar una mascota nueva
  emitPet(): void {
    // Verifica si los campos de nombre y raza no están vacíos
    if (this.pet.name.trim() && this.pet.breed.trim()) {
      // Emite el evento onNewPet con la información de la mascota
      this.onNewPet.emit({ ...this.pet });

      // Reinicia los valores del objeto pet a vacíos después de emitir el evento
      this.pet.name = '';
      this.pet.breed = '';
      this.pet.Age = 0;
      this.pet.imageUrl = ''; // Reinicia también la propiedad imageUrl
    }
  }
}

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Pet } from '../interfaces/pet.interface';

@Injectable({ providedIn: 'root' })
export class PetService {
  public pets: Pet[] = [
    {
      id: uuid(),
      name: 'Pepe',
      breed: 'Doberman',
      Age: 5,
      imageUrl: 'url_de_la_imagen_pepe'
    },
    {
      id: uuid(),
      name: 'Rocky',
      breed: 'Labrador',
      Age: 4,
      imageUrl: 'url_de_la_imagen_rocky'
    },
    {
      id: uuid(),
      name: 'Max',
      breed: 'ChihuaHua',
      Age: 3,
      imageUrl: 'url_de_la_imagen_max'
    }
  ];

  addPet(pet: Pet): void {
    const newPet: Pet = {
      id: uuid(),
      imageUrl: pet.imageUrl || 'url_predeterminada',// Aquí debes proporcionar la URL real de la imagen
      ...pet
    };
    this.pets.push(newPet);
  }

  deletePetById(id: string): void {
    this.pets = this.pets.filter(pet => pet.id !== id);
  }
}

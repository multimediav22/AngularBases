import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Pet } from '../interfaces/pet.interface';

@Injectable({providedIn: 'root'})
export class PetService {
  // No es necesario tener un constructor si está vacío
    // Arreglo de objetos de tipo Pet
    public pets: Pet[] = [
      {
        id: uuid(),
        name: 'Pepe',
        breed: 'Dog',
        Age: 5
      },
      {
        id: uuid(),
        name: 'Rocky',
        breed: 'Dog',
        Age: 4
      },
      // Agregamos un tercer elemento
      {
        id: uuid(),
        name: 'Max',
        breed: 'Cat',
        Age: 3
      }
    ];

    // Método para agregar una nueva mascota al arreglo
    addPet(pet: Pet): void {
      const newPet: Pet = {
        id: uuid(),
        ...pet
      };
      this.pets.push(newPet);
    }

    // Método para eliminar una mascota basado en su índice
    //?onDeletePet(index: number) {
     //? this.pets.splice(index, 1);
     deletePetById(id: string): void {
      this.pets = this.pets.filter(pet => pet.id !== id);
    }
}

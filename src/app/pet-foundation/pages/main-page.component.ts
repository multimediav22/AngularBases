import { Component } from '@angular/core';
import { Pet } from './../interfaces/pet.interface';
import { PetService } from './../services/pet.service';
@Component({
  selector: 'app-PetFoundation-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

constructor(private petService: PetService) { }
get pets(): Pet[] {
  return [...this.petService.pets];
}
onDeletePet(id: string): void {
  this.petService.deletePetById(id);
}
onNewPet(pet: Pet): void {
  this.petService.addPet(pet);
}
}

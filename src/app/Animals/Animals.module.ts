import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { AnimalPComponent } from './animal-p/animal-p.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AnimalPComponent,
    ListComponent,
  ],
  exports: [
    AnimalPComponent,
    ListComponent,
  ],
  imports: [
    CommonModule, // Agrega CommonModule al módulo
  ]
})
export class AnimalsModule { }

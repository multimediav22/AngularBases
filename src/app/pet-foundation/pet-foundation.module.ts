import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddPetComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PetFoundationModule {

 }

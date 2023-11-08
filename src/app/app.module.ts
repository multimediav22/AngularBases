// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimalsModule } from './Animals/Animals.module';
import { PetFoundationModule } from './pet-foundation/pet-foundation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AnimalsModule,
    PetFoundationModule, // Importa el módulo PetFoundationModule en el AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

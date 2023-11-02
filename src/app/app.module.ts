import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimalsModule } from './Animals/Animals.module'; // Corregido: ruta al módulo AnimalsModule

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AnimalsModule, // Corregido: importar el módulo AnimalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

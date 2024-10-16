import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppRoutingModule } from './app.routing.module'; // Asegúrate de que la ruta sea correcta
import { PneumaticTubeComponent } from './Components/pneumatic-tube/pneumatic-tube.component'; // Ajusta la ruta según tu estructura

@NgModule({
  declarations: [
    PneumaticTubeComponent // Si lo necesitas, inclúyelo aquí
  ],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {}

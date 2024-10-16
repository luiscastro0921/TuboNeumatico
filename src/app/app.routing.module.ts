import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component'; // Ajusta la ruta según tu estructura
import { PneumaticTubeComponent } from './Components/pneumatic-tube/pneumatic-tube.component'; // Ajusta la ruta según tu estructura

const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta por defecto que carga LoginComponent
  // Puedes agregar otras rutas aquí, por ejemplo:
  { path: 'pneumatic-tube', component: PneumaticTubeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


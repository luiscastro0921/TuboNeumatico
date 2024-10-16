import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>', // Aquí se renderizan los componentes según la ruta
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab_Pneumatic_Tube';
}

// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Añade esta línea
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Añade esto
    PodcastListComponent
  ],
  templateUrl: './app.component.html'

})
export class AppComponent {}
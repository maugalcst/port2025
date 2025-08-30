import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkCard } from './components/work-card/work-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('mi-portfolio');
}

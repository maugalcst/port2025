import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Technology } from '../../app';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectCard {
  @Input() projectImage: string = '';
  @Input() projectName: string = '';
  @Input() projectDescription: string = '';
  @Input() projectStack: Technology[] = [];

}

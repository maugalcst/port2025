import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-work-card',
  imports: [CommonModule, NgClass],
  templateUrl: './work-card.html',
  styleUrl: './work-card.css'
})
export class WorkCard {
  @Input() companyName: string = '';
  @Input() companyDuration: string = '';
  @Input() jobPosition: string = '';
  @Input() jobDescription: string = '';
  @Input() technologies: string[] = [];
  @Input() companyLogo: string = '';
  @Input() cardTheme: string = '';
}

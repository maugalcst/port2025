import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-row',
  imports: [CommonModule],
  templateUrl: './skills-row.html',
  styleUrl: './skills-row.css'
})
export class SkillsRow {
  @Input() title: string = '';
  @Input() technologies: { name: string; icon: string }[] = [];
}

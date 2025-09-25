import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css'
})
export class SkillsSectionComponent {

  @Input() skillsData: any[] = [];

  activeTab = '';

  ngOnInit(): void {
    if (this.skillsData.length > 0) {
      this.activeTab = this.skillsData[0].name;
    }
  }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

}
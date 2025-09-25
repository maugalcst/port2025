import { Component, Input, OnInit } from '@angular/core'; // <--- Agrega Input y OnInit
import { CommonModule } from '@angular/common';
import { TechSkill, SkillTab } from '..//../app'; // <--- Agrega esta línea

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css'
})
export class SkillsSectionComponent {
  @Input() skillsData: any[] = [];

  activeTab = '';
  selectedSkill: TechSkill | null = null;

  ngOnInit(): void {
    if (this.skillsData.length > 0) {
      this.activeTab = this.skillsData[0].name;
    }
  }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
    this.selectedSkill = null;
  }

  selectSkill(skill: TechSkill): void {
    this.selectedSkill = skill;
  }

}
import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkCard } from './components/work-card/work-card';
import { NgClass } from '@angular/common';
interface Job {
  companyName: string;
  companyDuration: string;
  jobPosition: string;
  jobDescription: string;
  technologies?: string[];
  companyLogo?: string;
  cardTheme?: string;
}
@Component({
  selector: 'app-root',
  imports: [WorkCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('mi-portfolio');

  workExperience: Job[] = [
    {
      companyName: 'Epicor',
      companyDuration: 'Jun 2025 - Present',
      jobPosition: 'QA Developer Intern',
      jobDescription: 'As a QA Developer Intern at Epicor, I specialize in test automation using WebdriverIO. My focus is on building and maintaining robust testing frameworks to ensure high-quality, reliable software.',
      technologies: ['WebdriverIO', 'Jiraa', 'Git', 'Zephyr', 'Azure DevOps'],
      companyLogo: "/epicor_logo.png",
      cardTheme: 'epicor-card'
    },
    {
      companyName: 'Banorte',
      companyDuration: 'Jun 2024 - Oct 2024',
      jobPosition: 'Customer Support Agent',
      jobDescription: 'I assisted clients with a wide range of inquiries, including mobile app assistance, investments, and fraud reports. My role involved providing effective solutions for a high volume of cases, which honed my skills in communication.',
      companyLogo: "/banorte_logo.png",
      cardTheme: 'banorte-card'
    }
  ];
}

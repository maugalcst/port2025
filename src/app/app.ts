import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkCard } from './components/work-card/work-card';
import { SkillsSectionComponent } from './components/skills-section/skills-section';
import { NgClass } from '@angular/common';
import { ProjectCard } from './components/project-card/project-card';

export interface TechSkill {
  name: string;
  icon: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  technologies: TechSkill[];
}

export interface SkillTab {
  name: string;
  skillGroups: SkillGroup[];
}
interface Job {
  companyName: string;
  companyDuration: string;
  jobPosition: string;
  jobDescription: string;
  technologies?: string[];
  companyLogo?: string;
  cardTheme?: string;
}

export interface Technology {
  icon: string;
  name: string;
}

export interface Project {
  projectImage: string;
  projectName: string;
  projectDescription: string;
  projectStack: Technology[];
  projectTheme: string;
}
@Component({
  selector: 'app-root',
  imports: [WorkCard, ProjectCard, SkillsSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('mi-portfolio');

  currentSlide = 0;

  workExperience: Job[] = [
    {
      companyName: 'Epicor',
      companyDuration: 'Jun 2025 - Present',
      jobPosition: 'QA Developer Intern',
      jobDescription: 'As a QA Developer Intern at Epicor, I specialize in test automation using WebdriverIO. My focus is on building and maintaining robust testing frameworks to ensure high-quality, reliable software.',
      technologies: ['WebdriverIO', 'Jiraa', 'Git', 'Zephyr', 'Azure DevOps', 'Postman', 'JavaScript'],
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

  projects: Project[] = [
    {
      projectImage: '/project_images/gastrack.png',
      projectName: 'GasTrack',
      projectDescription: 'GasTrack is a mobile app designed for Vixomedia to track vehicle fuel efficiency and store performance reports. It streamlines monitoring gas usage and ensures detailed, organized data for fleet management.',
      projectStack: [
        { icon: 'flutter', name: 'Flutter'},
        { icon: 'firebase', name: 'Firebase'}
      ],
      projectTheme: 'gastrack-theme'
    },
    {
      projectImage: '/project_images/moonhike.png',
      projectName: 'MoonHike',
      projectDescription: 'MoonHike is a smart navigation app focused on safety, offering optimized routes, real-time risk analysis, and incident reporting. With features like incident reporting and dynamic location tracking, it empowers users to navigate securely while contributing to community safety.',
      projectStack: [
        { icon: 'flutter', name: 'Flutter'},
        { icon: 'firebase', name: 'Firebase'}
      ],
      projectTheme: 'moonhike-theme'
    },
    {
      projectImage: '/project_images/sanpatricio.png',
      projectName: 'San Patricio E-Commerce',
      projectDescription: 'San Patricio E-Commerce is a full-stack e-commerce platform developed specifically for the perfume industry. The backend, powered by Node.js, manages product inventory, user accounts, and ordera. On the frontend, pure JavaScript delivers a dynamic and intuitive user experience.',
      projectStack: [
        { icon: 'javascript', name: 'JavaScript'},
        { icon: 'nodejs', name: 'Node.js'},
        { icon: 'postgresql', name: 'PostgreSQL'},
      ],
      projectTheme: 'sanpatricio-theme'
    },
  ];

  skillsData: SkillTab[] = [
    {
      name: 'Frontend & Backend',
      skillGroups: [
        {
          title: 'My go-to for Front-End and UI',
          technologies: [
            { name: 'Angular', icon: 'angular', description: 'This is a tiny description of what is Angular and why/where I use Angular as a tool.' },
            { name: 'TypeScript', icon: 'typescript', description: 'Description for TypeScript.' },
            { name: 'JavaScript', icon: 'javascript', description: 'Description for JavaScript.' },
            { name: 'CSS3', icon: 'css3', description: 'Description for CSS3.' },
            { name: 'SASS', icon: 'sass', description: 'Description for SASS.' },
            { name: 'HTML5', icon: 'html5', description: 'Description for HTML5.' },
          ]
        },
        {
          title: 'Back-end & Databases',
          technologies: [
            { name: 'Java', icon: 'java', description: 'Description for Java.' },
            { name: 'Spring Boot', icon: 'spring-boot', description: 'Description for Spring Boot.' },
            { name: 'PostgreSQL', icon: 'postgresql', description: 'Description for PostgreSQL.' },
            { name: 'Supabase', icon: 'supabase', description: 'Description for Supabase.' },
            { name: 'Firebase', icon: 'firebase', description: 'Description for Firebase.' },
          ]
        }
      ]
    },
    {
      name: 'Other Tools',
      skillGroups: [
        {
          title: 'Automation & Testing',
          technologies: [
            { name: 'Git', icon: 'git', description: 'Description for Git.' },
            { name: 'Jira', icon: 'jira', description: 'Description for Jira.' },
            { name: 'Azure DevOps', icon: 'azure-devops', description: 'Description for Azure DevOps.' },
            { name: 'WebdriverIO', icon: 'webdriverio', description: 'Description for WebdriverIO.' },
          ]
        },
        {
          title: 'Mobile & Other Tools',
          technologies: [
            { name: 'Flutter', icon: 'flutter', description: 'Description for Flutter.' },
            { name: 'Dart', icon: 'dart', description: 'Description for Dart.' },
            { name: 'Python', icon: 'python', description: 'Description for Python.' },
            { name: 'Linux', icon: 'linux', description: 'Description for Linux.' },
            { name: 'Docker', icon: 'docker', description: 'Description for Docker.' },
            { name: 'Visual Studio Code', icon: 'vscode', description: 'Description for VSCode.' },
            { name: 'Intellij IDEA', icon: 'idea', description: 'Description for Intellij IDEA.' },
            { name: 'Figma', icon: 'figma', description: 'Description for Figma.' },
          ]
        }
      ]
    }
  ];

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.projects.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === this.projects.length - 1 ? 0 : this.currentSlide + 1;
  }

}

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
            { 
              name: 'Angular', 
              icon: 'angular', 
              description: 'My primary framework for building dynamic, single-page applications. I use it for its robust structure and powerful features like two-way data binding and dependency injection.' 
            },
            { 
              name: 'TypeScript', 
              icon: 'typescript', 
              description: 'A statically typed superset of JavaScript that enhances code quality and maintainability. I use it to build large-scale applications with fewer bugs.' 
            },
            { 
              name: 'JavaScript', 
              icon: 'javascript', 
              description: 'The core language of the web. I use it for creating interactive web pages and for building dynamic user interfaces.' 
            },
            { 
              name: 'CSS3', 
              icon: 'css3', 
              description: 'The style sheet language for describing the presentation of web pages. I use it to design and style the user interface of my projects.' 
            },
            { 
              name: 'SASS', 
              icon: 'sass', 
              description: 'A CSS pre-processor that adds power and flexibility to my stylesheets. I use it to write cleaner, more modular, and reusable CSS with variables and nested rules.' 
            },
            { 
              name: 'HTML5', 
              icon: 'html5', 
              description: 'The foundation of all web pages. I use it for structuring my content and building accessible and semantic web applications.' 
            },
          ]
        },
        {
          title: 'Back-end & Databases',
          technologies: [
            { 
              name: 'Java', 
              icon: 'java', 
              description: 'A robust, object-oriented language that I use for building scalable and high-performance backend systems.' 
            },
            { 
              name: 'Spring Boot', 
              icon: 'spring-boot', 
              description: 'My preferred framework for building production-grade, standalone Java applications quickly and efficiently. I use it for creating microservices and RESTful APIs.' 
            },
            { 
              name: 'PostgreSQL', 
              icon: 'postgresql', 
              description: 'A powerful, open-source relational database system. I use it for its reliability, data integrity, and advanced features for handling complex data.' 
            },
            { 
              name: 'Supabase', 
              icon: 'supabase', 
              description: 'An open-source Firebase alternative. I use it to handle backend services, including authentication, real-time databases, and storage, for my web applications.' 
            },
            { 
              name: 'Firebase', 
              icon: 'firebase', 
              description: 'A comprehensive mobile and web development platform. I use it for features like real-time databases, authentication, and cloud functions to build fully functional applications.' 
            },
          ]
        }
      ]
    },
    {
      name: 'Other Tools',
      skillGroups: [
        {
          title: 'Mobile & Other Tools',
          technologies: [
            { 
              name: 'Flutter', 
              icon: 'flutter', 
              description: 'A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. I use it for building cross-platform mobile apps.' 
            },
            { 
              name: 'Dart', 
              icon: 'dart', 
              description: 'The programming language used by Flutter. I use it for building robust and performant mobile applications.' 
            },
            { 
              name: 'Python', 
              icon: 'python', 
              description: 'A versatile language that I use for data analysis, scripting, and automating tasks. It is also a key language for machine learning and AI development.' 
            },
            { 
              name: 'Git', 
              icon: 'git', 
              description: 'A version control system that I use to track changes in my source code. It is essential for collaborating with other developers and managing project history.' 
            },
            { 
              name: 'Linux', 
              icon: 'linux', 
              description: 'A free and open-source operating system. I use it for its stability and security as a development environment and for deploying applications on servers.' 
            },
            { 
              name: 'Docker', 
              icon: 'docker', 
              description: 'A platform for developing, shipping, and running applications in containers. I use it to create isolated environments for my applications, ensuring they run consistently across different machines.' 
            },
            { 
              name: 'Visual Studio Code', 
              icon: 'vscode', 
              description: 'My preferred code editor. I use it for its powerful features, extensive extensions, and seamless integration with Git and other development tools.' 
            },
            { 
              name: 'Intellij IDEA', 
              icon: 'idea', 
              description: 'A powerful integrated development environment for Java. I use it for its intelligent code assistance and advanced debugging tools when working on backend projects.' 
            },
            { 
              name: 'Figma', 
              icon: 'figma', 
              description: 'A collaborative interface design tool. I use it to design user interfaces and create prototypes for my projects before writing any code.' 
            },
          ]
        },
        {
          title: 'Automation & Testing',
          technologies: [
            { 
              name: 'Jira', 
              icon: 'jira', 
              description: 'A project management and issue-tracking tool. I use it to track tasks, manage bugs, and organize my workflow in agile development teams.' 
            },
            { 
              name: 'Azure DevOps', 
              icon: 'azure-devops', 
              description: 'A suite of tools for software development, including version control, project management, and CI/CD pipelines. I use it for continuous integration and continuous deployment.' 
            },
            { 
              name: 'WebdriverIO', 
              icon: 'webdriverio', 
              description: 'A next-gen browser and mobile automation framework. I use it to write end-to-end tests that ensure my applications are high quality and reliable.' 
            },
            { 
              name: 'Zephyr', 
              icon: 'zephyr', 
              description: 'A test management tool that integrates with Jira. I use it to plan, track, and manage all my testing activities within my development projects.' 
            },
            {
              name: 'Postman',
              icon: 'postman',
              description: 'An API platform that I use extensively in my role as a QA Automation Developer to build, test, and document APIs, ensuring their functionality and reliability for automated test cases.'
            },
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

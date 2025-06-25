import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  project_details: Project[] = [
    {
      id: 1,
      title: 'Cloudlit Tech Inc.',
      category: 'Websites',
      tech_stack: 'HTML, CSS, BootStrap, Nuxt.js',
      link: 'https://cloudlittech.com/',
      link_text: 'Cloudlit Tech Inc.',
      description: 'Cloudlit Tech Inc. is developing a cutting-edge digital platform designed to transform how teams collaborate, innovate, and grow',
      images: ['./images/portfolio/iphone-screen.png'],
    },
    {
      id: 2,
      title: 'Google Cloud Digital Leader',
      category: 'Certificates',
      tech_stack: 'Google Cloud Services',
      link: '',
      link_text: 'Cloud Digital Leader',
      description: 'A Cloud Digital Leader can articulate the capabilities of Google Cloud core products and services and how they benet organizations. They can also describe common business use cases and how cloud solutions support an enterprise.',
      images: ['./images/certificates/CloudDigitalLeader.jpg'],
    },
    {
      id: 3,
      title: 'Bell University - Cloud Architecture',
      category: 'Certificates',
      tech_stack: 'Cloud Computing',
      link: '',
      link_text: 'Cloud Computing - Cloud Architecture',
      description: 'A Cloud Digital Leader can articulate the capabilities of Google Cloud core products and services and how they benet organizations. They can also describe common business use cases and how cloud solutions support an enterprise.',
      images: ['./images/certificates/BellUGraduate.jpg'],
    }
  ];

  getProject(project_id: number): Project | undefined {
    let project = this.project_details.find(
      (project) => project.id === project_id
    );
    return project;
  }
}

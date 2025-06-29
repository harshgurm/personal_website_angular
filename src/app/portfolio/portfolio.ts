import { Component, inject } from '@angular/core';
import { Project } from '../interfaces/project';
import { ProjectService } from '../services/project-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [RouterModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {

  projectService = inject(ProjectService);
  selectedCategory = 'All';

  projects: Project[] = this.projectService.project_details;

  filterProjects(category:string){
    this.selectedCategory = category;
  }

}

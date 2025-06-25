import { Component, inject  } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project-service';

@Component({
  selector: 'app-portfolio-details',
  imports: [RouterModule],
  templateUrl: './portfolio-details.html',
  styleUrl: './portfolio-details.css',
})
export class PortfolioDetails {
  
  route: ActivatedRoute = inject(ActivatedRoute);
  project_id = 0;
  project:Project | undefined;

  projectService:ProjectService = inject(ProjectService);


  constructor() {
    this.project_id = Number(this.route.snapshot.params['id']);
    if(this.project_id) {
      this.project = this.projectService.getProject(this.project_id);
    }
  }

}

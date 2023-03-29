import { Component , OnInit } from '@angular/core';
import { ProjectService } from './Projects.service';
import { ProjectModel } from '../Shared/Project.model';
import { ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
})
export class ProjectsListComponent implements OnInit {
  Projects: ProjectModel[];
  constructor(
    private ProjectService: ProjectService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.Projects = this.ProjectService.getProjects();
    this.ProjectService.ProjectChange.subscribe((Projects :ProjectModel[]) => {
      this.Projects=Projects;
    })
  }
}

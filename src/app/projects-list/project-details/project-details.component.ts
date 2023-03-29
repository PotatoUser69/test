import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../Projects.service';
import { ProjectModel } from 'src/app/Shared/Project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  id:number
  Project:ProjectModel=this.projectService.getProject(0);

  constructor(private projectService: ProjectService,
              private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.id= +params['id'];
      this.Project=this.projectService.getProject(this.id);
  })
  }
}

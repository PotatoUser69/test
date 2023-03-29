import { Component ,Input, OnInit} from '@angular/core';
import { ProjectService } from '../Projects.service';
import { ProjectModel } from 'src/app/Shared/Project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  id:string 
  constructor(private projectService: ProjectService){}
  @Input() Project:ProjectModel
  ngOnInit(): void {
    this.id="/"+this.Project.id.toString()
  }
}

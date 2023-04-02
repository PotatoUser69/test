import { Component } from '@angular/core';
import { ProjectService } from '../../Shared/Projects.service';

@Component({
  selector: 'app-Project-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles.scss']
})
export class HeaderComponent {
  id:number
  Projects={name:"Project1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia fugit reiciendis ",time:5,id:0}
  constructor(private projectService: ProjectService){}

  add(){
    this.id=this.projectService.getProjectsLen()
    this.Projects.id=this.id
    this.Projects.name = "Project " + (this.id+1)
    this.projectService.addProject({...this.Projects})
    console.log(this.projectService.getProjectsLen())
  }

}

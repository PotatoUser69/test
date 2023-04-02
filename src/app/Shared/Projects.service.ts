import { EventEmitter,Injectable } from "@angular/core";
import {ProjectModel} from "./Project.model"

@Injectable({providedIn: 'root'})
export class ProjectService{

    ProjectChange=new EventEmitter<ProjectModel[]>();

    private Projects:ProjectModel[] = [{name:"Project 1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia fugit reiciendis ",time:3,id:0},{name:"Project 2",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia fugit reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia fugit reiciendis ",time:4,id:1},{name:"Project 3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia fugit reiciendis ",time:5,id:2}];

    addProject(Project){
        this.Projects.push(Project);
        this.ProjectChange.emit(this.Projects.slice());
    }

    getProjectsLen():number{
        return this.Projects.length;
    }

    getProjects():ProjectModel[]{
        return this.Projects.slice()
    }

    getProject(id: number):ProjectModel {
        return this.Projects[id]
    }

}
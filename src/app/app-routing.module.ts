import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './projects-list/project-details/project-details.component';

const routes: Routes = [
  {path:"", redirectTo:"/0",pathMatch:"full" },
  {path:":id",component:ProjectDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

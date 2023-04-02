import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectItemComponent } from './projects-list/Project-item/project-item.component';
import { HeaderComponent } from './projects-list/Project-header/header.component';
import { ProjectDetailsComponent } from './projects-list/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

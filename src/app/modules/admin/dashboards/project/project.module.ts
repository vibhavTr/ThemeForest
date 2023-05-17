import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule } from '@angular/router';
import { projectRoutes } from './project.routing';



@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    RouterModule.forChild(projectRoutes),
    CommonModule,
  ]
})
export class ProjectModule { }

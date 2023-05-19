import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule } from '@angular/router';
import { projectRoutes } from './project.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [ProjectComponent],
  imports: [
    RouterModule.forChild(projectRoutes),
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class ProjectModule {}

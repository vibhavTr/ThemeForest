import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authSignOutRoutes } from './sign-out.routing';
import { SignOutComponent } from './sign-out.component';

@NgModule({
  declarations: [SignOutComponent],
  imports: [CommonModule, RouterModule.forChild(authSignOutRoutes)],
})
export class SignOutModule {}

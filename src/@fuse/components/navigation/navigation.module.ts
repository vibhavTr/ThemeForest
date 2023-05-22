import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalComponent } from './vertical/vertical.component';

@NgModule({
  declarations: [VerticalComponent],
  imports: [CommonModule],
  exports: [VerticalComponent],
})
export class NavigationModule {}

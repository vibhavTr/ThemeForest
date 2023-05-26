import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullScreenComponent } from './full-screen.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [FullScreenComponent],
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, CommonModule],
  exports: [FullScreenComponent],
})
export class FullScreenModule {}

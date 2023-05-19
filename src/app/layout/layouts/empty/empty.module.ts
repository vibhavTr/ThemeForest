import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { LoadingBarModule } from 'src/@fuse/components/loading-bar/loading-bar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EmptyComponent],
  imports: [CommonModule, LoadingBarModule, RouterModule],
  exports: [EmptyComponent],
})
export class EmptyModule {}

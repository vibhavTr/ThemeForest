import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NotificationsComponent],
  imports: [CommonModule, MatIconModule],
  exports: [NotificationsComponent],
})
export class NotificationsModule {}

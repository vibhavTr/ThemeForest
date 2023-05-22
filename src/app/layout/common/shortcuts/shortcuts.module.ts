import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutsComponent } from './shortcuts.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ShortcutsComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ShortcutsComponent],
})
export class ShortcutsModule {}

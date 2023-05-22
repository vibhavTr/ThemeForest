import { NgModule } from '@angular/core';
import { LanguageComponent } from './language.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [LanguageComponent],
  imports: [MatButtonModule, MatIconModule, MatMenuModule],
  exports: [LanguageComponent],
})
export class LanguageModule {}

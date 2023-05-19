import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { EmptyModule } from './layouts/empty/empty.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [EmptyModule],
})
export class LayoutModule {}

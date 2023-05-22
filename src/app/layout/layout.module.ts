import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { EmptyModule } from './layouts/empty/empty.module';
import { ClassyModule } from './layouts/vertical/classy/classy.module';

const LayOutModules = [EmptyModule, ClassyModule];
@NgModule({
  declarations: [LayoutComponent],
  imports: [...LayOutModules],
  exports: [LayoutComponent, ...LayOutModules],
})
export class LayoutModule {}

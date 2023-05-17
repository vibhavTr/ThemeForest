import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { FuseAlertModule } from '../@fuse/components/alert/alert.module';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ExtraOptions, RouterModule, PreloadAllModules } from '@angular/router';
import { appRoutes } from './app.routing';
import { FuseMockApiModule } from 'src/@fuse/lib/mock-api';
import { mockApiServices } from './mock-api';

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};
@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    FuseMockApiModule.forRoot(mockApiServices),
    BrowserModule,
    FuseAlertModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AppModule {}

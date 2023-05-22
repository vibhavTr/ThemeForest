import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassyComponent } from './classy.component';
import { MatIconModule } from '@angular/material/icon';
import { LanguageModule } from 'src/app/layout/common/language/language.module';
import { SearchModule } from 'src/app/layout/common/search/search.module';
import { NotificationsModule } from 'src/app/layout/common/notifications/notifications.module';
import { MessagesModule } from 'src/app/layout/common/messages/messages.module';
import { ShortcutsModule } from 'src/app/layout/common/shortcuts/shortcuts.module';
import { NavigationModule } from 'src/@fuse/components/navigation/navigation.module';

@NgModule({
  declarations: [ClassyComponent],
  imports: [
    CommonModule,
    MatIconModule,
    LanguageModule,
    SearchModule,
    NotificationsModule,
    MessagesModule,
    ShortcutsModule,
    NavigationModule,
  ],
  exports: [ClassyComponent],
})
export class ClassyModule {}

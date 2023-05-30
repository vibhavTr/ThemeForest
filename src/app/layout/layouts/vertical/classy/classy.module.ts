import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassyComponent } from './classy.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from 'src/app/layout/common/search/search.module';
import { NotificationsModule } from 'src/app/layout/common/notifications/notifications.module';
import { MessagesModule } from 'src/app/layout/common/messages/messages.module';
import { ShortcutsModule } from 'src/app/layout/common/shortcuts/shortcuts.module';
import { NavigationModule } from 'src/@fuse/components/navigation/navigation.module';
import { UserModule } from 'src/app/layout/common/user/user.module';
import { FullScreenModule } from 'src/@fuse/components/full-screen/full-screen.module';
import { LanguagesModule } from 'src/app/layout/common/languages/languages.module';

@NgModule({
  declarations: [ClassyComponent],
  imports: [
    CommonModule,
    MatIconModule,
    LanguagesModule,
    SearchModule,
    NotificationsModule,
    MessagesModule,
    ShortcutsModule,
    NavigationModule,
    UserModule,
    FullScreenModule,
  ],
  exports: [ClassyComponent],
})
export class ClassyModule {}

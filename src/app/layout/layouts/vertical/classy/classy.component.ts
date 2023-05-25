import { Component } from '@angular/core';
import { User } from 'src/app/core/user/user.types';

@Component({
  selector: 'app-classy',
  templateUrl: './classy.component.html',
  styleUrls: ['./classy.component.scss'],
})
export class ClassyComponent {
  user: User;
  toggleNavigation(event: any) {
    console.log(event);
  }
}

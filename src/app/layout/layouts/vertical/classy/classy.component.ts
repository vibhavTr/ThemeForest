import { Component } from '@angular/core';

@Component({
  selector: 'app-classy',
  templateUrl: './classy.component.html',
  styleUrls: ['./classy.component.scss'],
})
export class ClassyComponent {
  toggleNavigation(event: any) {
    console.log(event);
  }
}

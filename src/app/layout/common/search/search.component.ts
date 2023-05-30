import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() appearance: 'basic' | 'bar' = 'basic';
  @Input() debounce: number = 3000;
  @Input() minLength: number = 2;
  opened: boolean = false;

  constructor(private _httpClient: HttpClient) {}

  //Host binding for component class
  @HostBinding('class') get classList(): any {
    return {
      'search-appearance-bar': this.appearance === 'bar',
      'search-appearance-basic': this.appearance === 'basic',
      'search-opened': this.opened,
    };
  }

  //Setter for bar search input

  @ViewChild('barSearchInput')
  set barSearchInput(value: ElementRef) {
    // If the value exists, it means that the search input
    // is now in the DOM, and we can focus on the input..
    if (value) {
      // Give Angular time to complete the change detection cycle
      setTimeout(() => {
        // Focus to the input element
        value.nativeElement.focus();
      });
    }
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  open(): void {
    // return if its already opened
    if (this.opened === true) {
      return;
    }
    //if not, set it to opened
    this.opened = true;
  }

  close(): void {
    // return if its closed
    if (!this.opened) {
      return;
    }
    // if not, set it to closed
    this.opened = false;
  }
}

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'fuse-ThemeForest';
  @ViewChild('signInNgForm') signInNgForm!: NgForm;
  signInForm!: UntypedFormGroup;
  constructor(private _formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.signInForm = this._formBuilder.group({
      email: [
        'hughes.brian@company.com',
        [Validators.required, Validators.email],
      ],
      password: ['admin', Validators.required],
      rememberMe: [''],
    });
  }

  signIn(){}
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm: NgForm;
  signInForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      email: [
        'hughes.brian@company.com',
        [Validators.required, Validators.email],
      ],
      password: ['admin', Validators.required],
      rememberMe: [''],
    });
  }

  signIn(): void {
    if (this.signInForm.invalid) {
      return;
    }

    this.signInForm.disable();
    this._authService.signIn(this.signInForm.value).subscribe(
      () => {
        // Set the redirect url.
        // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
        // to the correct page after a successful sign in. This way, that url can be set via
        // routing file and we don't have to touch here.
        const redirectURL =
          this._activatedRoute.snapshot.queryParamMap.get('redirectURL') ||
          '/signed-in-redirect';
        this._router.navigateByUrl(redirectURL);
      },
      (response) => {
        const redirectUrl =
          this._activatedRoute.snapshot.queryParamMap.get('redirectURL');
      }
    );
  }
}

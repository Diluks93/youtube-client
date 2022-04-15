import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { NamePage, User } from '../../models/auth.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public hide: boolean = true;

  public message: string;

  public loginForm!: FormGroup;

  public loading = false;

  public submitted = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.message = this.getMessage();
  }

  public isLogin: boolean = localStorage.getItem('user') ? true : false;

  public isProcess: boolean = false;

  private getMessage(): string {
    return localStorage.getItem('user') ? 'You are logged in!' : 'You are not logged in!';
  }

  public ngOnInit() {
    const users: User[] = [
      {
        id: '0',
        email: 'test@test',
        password: 't123Test!',
        firstName: 'Guest',
        lastName: 'Test',
        token: 'fake-jwt-token',
      },
    ];
    localStorage.setItem('login-example-users', JSON.stringify(users));

    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(8), this.passwordValidator]],
    });
  }

  private passwordValidator(control: FormControl) {
    const value = control.value;
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasLowercaseLetter = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSymbol = /[@$!%*?&]/.test(value);

    switch (true) {
      case !hasCapitalLetter:
        return { invalidPassword: 'Your password have to include uppercase letters.' };
      case !hasLowercaseLetter:
        return { invalidPassword: 'Your password have to include lowercase letters.' };
      case !hasNumber:
        return { invalidPassword: 'Your password have to mixture of letters and numbers.' };
      case !hasSymbol:
        return {
          invalidPassword: 'Your password have to inclusion of at least one special character.',
        };
      default:
        return null;
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService
      .login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.message = 'Trying to log in ...';
          this.isProcess = true;
          setTimeout(() => {
            this.message = this.getMessage();
            const redirectUrl: NamePage = '/home-page';
            this.router.navigate([redirectUrl]);
          }, 1000);
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        },
      });
  }
}

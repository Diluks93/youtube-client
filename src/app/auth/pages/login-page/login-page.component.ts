import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { NamePage, User } from '../../models/auth.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public hide: boolean = true;

  public message: string;

  form!: FormGroup;

  loading = false;

  submitted = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
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
        username: 'test',
        password: 'test',
        firstName: 'Guest',
        lastName: 'Test',
        token: 'fake-jwt-token',
      },
    ];
    localStorage.setItem('login-example-users', JSON.stringify(users));
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.authService
      .login(this.f['username'].value, this.form.controls['password'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.message = 'Trying to log in ...';
          this.isProcess = true;
          this.message = this.getMessage();
          setTimeout(() => {
            const redirectUrl: NamePage = '/main-page';
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

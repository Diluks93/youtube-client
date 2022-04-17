import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  public adminForm!: FormGroup;

  public submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: [null, [Validators.maxLength(255)]],
      image: [null, [Validators.required, Validators.email]],
      video: [null, [Validators.required, Validators.email]],
      date: [null, [Validators.required, this.checkDate]],
    });
  }

  public checkDate(control: FormControl) {
    const date = new Date(control.value);
    const currentDate = new Date();
    if (date > currentDate) {
      return {
        date: false,
      };
    }
    return null;
  }

  public get f() {
    return this.adminForm.controls;
  }

  public onSubmit() {
    this.submitted = true;

    if (this.adminForm.invalid) {
      return;
    } else {
      console.log(this.adminForm.value);
    }
  }
}

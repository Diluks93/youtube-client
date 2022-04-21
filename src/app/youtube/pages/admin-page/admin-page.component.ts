import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as PodcastActions from 'src/app/redux/actions/podcast.actions';
import { PodcastCustom } from '../../models/podcast-model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPageComponent implements OnInit {
  public adminForm!: FormGroup;

  public submitted = false;

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {}

  public ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: [null, [Validators.maxLength(255)]],
      image: [null, [Validators.required]],
      video: [null, [Validators.required]],
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
      this.addPodcastToResult({ id: '0', ...this.adminForm.value });
      this.router.navigate(['/home-page']);
    }
  }

  public addPodcastToResult(podcast: PodcastCustom): void {
    this.store.dispatch(PodcastActions.createPodcast({ podcast }));
  }
}

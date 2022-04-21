import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CoreService } from 'src/app/core/services/core.service';
import * as PodcastActions from 'src/app/redux/actions/podcast.actions';
import { AppState } from 'src/app/redux/state.models.ts/app.state';
import { Podcast } from '../../models/podcast-model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  private _valueThatUserTypes: string = '';

  public toggleFilterComponent: boolean = false;

  public podcasts$!: Observable<Podcast[]>;

  public loading$!: Observable<boolean>;

  private handleSearch(value: string | null): void {
    if (value) {
      this.store.dispatch(PodcastActions.searchPodcast({ query: value }));
      this.podcasts$ = (this.store as Store<AppState>).select(
        (state) => state.podcastState.podcasts,
      ) as Observable<Podcast[]>;
      this.loading$ = (this.store as Store<AppState>).select(
        (state) => state.podcastState.loading,
      ) as Observable<boolean>;
    }
  }

  @Input()
  public get valueThatUserTypes(): string {
    return this._valueThatUserTypes;
  }

  @Input()
  public isClickingCountOfViews: boolean | undefined = undefined;

  @Input()
  public isClickingDate: boolean | undefined = undefined;

  public set valueThatUserTypes(value: string) {
    this._valueThatUserTypes = value;
  }

  public toggleClickCountOfViews(value: boolean): void {
    this.isClickingCountOfViews = value;
  }

  public toggleClickDate(value: boolean): void {
    this.isClickingDate = value;
  }

  constructor(private readonly coreService: CoreService, private store: Store) {}

  public ngOnInit(): void {
    this.coreService.clickChange.subscribe((value: boolean) => {
      this.toggleFilterComponent = value;
    });
    this.coreService.changeInputValue().subscribe((value) => {
      const inputValue = value ? value.text : sessionStorage.getItem('inputValue');
      this.handleSearch(inputValue);
    });
  }
}

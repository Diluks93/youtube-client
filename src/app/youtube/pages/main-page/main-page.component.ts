import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CoreService } from 'src/app/core/services/core.service';
import { Podcast } from '../../models/podcast-model';
import { PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  private _valueThatUserTypes: string = '';

  public toggleFilterComponent: boolean = false;

  public podcasts$!: Observable<Podcast[]>;

  private handleSearch(value: string | null): void {
    if (value) {
      this.podcasts$ = this.podcastService.getPodcasts(value);
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

  constructor(
    private readonly coreService: CoreService,
    private readonly podcastService: PodcastService,
  ) {}

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

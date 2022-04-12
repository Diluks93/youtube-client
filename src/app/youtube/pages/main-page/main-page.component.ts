import { Component, Input, OnInit } from '@angular/core';

import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  private _valueThatUserTypes: string = '';

  public toggleFilterComponent: boolean = false;

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

  constructor(private readonly coreService: CoreService) {}

  ngOnInit(): void {
    this.coreService.clickChange.subscribe((value: boolean) => {
      this.toggleFilterComponent = value;
    });
  }
}

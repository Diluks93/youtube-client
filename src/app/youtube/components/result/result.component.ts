import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Podcast } from '../../models/podcast-model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
  @Input()
  public podcasts!: Podcast[] | null;

  @Input()
  public isClickingCountOfViews!: boolean | undefined;

  @Input()
  public isClickingDate!: boolean | undefined;

  @Input()
  public valueThatUserTypes: string = '';

  @Output()
  public valueThatUserTypesChange = new EventEmitter<string>();

  public identify(_: number, item: Podcast): string {
    return item.id;
  }
}

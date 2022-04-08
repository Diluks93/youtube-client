import { Component } from '@angular/core';

import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(public readonly coreService: CoreService) {}
}

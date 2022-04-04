import { TestBed } from '@angular/core/testing';

import { PodcastService } from './podcast.service';

describe('ItemService', () => {
  let service: PodcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

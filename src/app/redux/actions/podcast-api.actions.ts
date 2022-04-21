import { createAction, props } from '@ngrx/store';

import { Podcast } from 'src/app/youtube/models/podcast-model';

export const searchSuccess = createAction(
  '[Podcasts/API] Search Success',
  props<{ podcasts: Podcast[] }>(),
);

export const searchFailure = createAction(
  '[Podcasts/API] Search Failure',
  props<{ errorMsg: string }>(),
);

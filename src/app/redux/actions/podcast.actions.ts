import { createAction, props } from '@ngrx/store';
import { PodcastCustom } from 'src/app/youtube/models/podcast-model';

export const getPodcasts = createAction('[MAIN PAGE] GET ALL PODCASTS');

export const getPodcast = createAction(
  '[MAIN PAGE] GET PODCAST BY ID',
  props<{ podcastID: string }>(),
);

export const createPodcast = createAction(
  '[ADMIN PAGE] CREATE NEW PODCAST',
  props<{ podcast: PodcastCustom }>(),
);

export const searchPodcast = createAction(
  '[MAIN PAGE] SEARCH PODCASTS',
  props<{ query: string }>(),
);

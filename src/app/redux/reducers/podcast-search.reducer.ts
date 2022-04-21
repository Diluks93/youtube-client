import { Action, createReducer, on } from '@ngrx/store';

import * as PodcastActions from '../actions/podcast.actions';
import * as PodcastApiActions from '../actions/podcast-api.actions';
import { initialPodcastState, PodcastState } from '../state.models.ts/podcast.state';

const reducer = createReducer(
  initialPodcastState,
  on(PodcastApiActions.searchSuccess, (state, { podcasts }): PodcastState => {
    return { ...state, podcasts: [...podcasts, ...state.podcasts], loading: false, loaded: true };
  }),
  on(PodcastApiActions.searchFailure, (state, { errorMsg }) => {
    return { ...state, errorMsg, loaded: false, loading: false };
  }),
  on(PodcastActions.getPodcast, (state): PodcastState => {
    return { ...state };
  }),
  on(PodcastActions.getPodcasts, (state): PodcastState => {
    return { ...state };
  }),
  on(PodcastActions.searchPodcast, (state, { query }) => {
    return { ...state, query, loading: true };
  }),
  on(PodcastActions.createPodcast, (state, { podcast }): PodcastState => {
    return { ...state, podcasts: [podcast, ...state.podcasts] };
  }),
);

export function podcastReducer(state: PodcastState, action: Action): PodcastState {
  return reducer(state, action);
}

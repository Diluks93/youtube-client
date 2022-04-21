import { Podcast, PodcastCustom } from 'src/app/youtube/models/podcast-model';

export interface PodcastState {
  podcasts: PodcastCustom[] | Podcast[];
  loading: boolean;
  loaded: boolean;
  error: Error | null;
}

export const initialPodcastState: PodcastState = {
  podcasts: [],
  loading: false,
  loaded: false,
  error: null,
};

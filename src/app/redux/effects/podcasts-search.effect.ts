import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, asyncScheduler, EMPTY as empty, of } from 'rxjs';
import { catchError, debounceTime, map, skip, switchMap, takeUntil } from 'rxjs/operators';

import { PodcastService } from 'src/app/youtube/services/podcast.service';
import * as PodcastActions from '../actions/podcast.actions';
import * as PodcastApiActions from '../actions/podcast-api.actions';

@Injectable()
export class PodcastSearchEffect {
  search$ = createEffect(
    () =>
      ({ debounce = 500, scheduler = asyncScheduler } = {}): Observable<Action> => {
        return this.actions$.pipe(
          ofType(PodcastActions.searchPodcast),
          debounceTime(debounce, scheduler),
          switchMap(({ query }) => {
            if (query === '') {
              return empty;
            }

            const nextSearch$ = this.actions$.pipe(ofType(PodcastActions.searchPodcast), skip(1));

            return this.podcastService.getPodcasts(query).pipe(
              takeUntil(nextSearch$),
              map((podcasts) => PodcastApiActions.searchSuccess({ podcasts })),
              catchError((error) =>
                of(PodcastApiActions.searchFailure({ errorMsg: error.message })),
              ),
            );
          }),
        );
      },
  );

  constructor(private actions$: Actions, private podcastService: PodcastService) {}
}

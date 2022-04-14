import { Pipe, PipeTransform } from '@angular/core';

import { Podcast } from '../models/podcast-model';

/**
 * order-by value['viewCount'] as number or value['publishedAt] of direction
 * @param{Podcast[]} podcasts
 * @param{boolean|undefined} directionCountOfView
 * @param{boolean|undefined} directionDate
 * @returns{Podcast[]}
 */
@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  public transform<T extends Podcast[]>(value: T, type: string, isClick: boolean | undefined): T {
    if (isClick === undefined) return value;

    switch (type) {
      case 'date': {
        return value.sort((a, b) => {
          const firstDate = new Date(a.publishedAt).getDate();
          const secondDate = new Date(b.publishedAt).getDate();

          return isClick ? firstDate - secondDate : secondDate - firstDate;
        });
      }
      case 'viewCount': {
        return value.sort((a, b) => {
          const firstViewCount = +a.viewCount;
          const secondViewCount = +b.viewCount;

          return isClick ? firstViewCount - secondViewCount : secondViewCount - firstViewCount;
        });
      }
      default: {
        return value;
      }
    }
  }
}

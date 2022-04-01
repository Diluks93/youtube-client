import { Pipe, PipeTransform } from '@angular/core';
import { Podcast } from '../services/podcast.service';

/**
 * order-by value['viewCount'] or value['publishedAt] of direction
 * @param{Podcast[]} podcasts
 * @param{boolean|undefined} directionCountOfView
 * @param{boolean|undefined} directionDate
 * @returns{Podcast[]}
 */
@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    value: Array<Podcast>,
    directionCountOfView: boolean | undefined,
    directionDate: boolean | undefined = undefined,
  ): Array<Podcast> {
    if (directionCountOfView === undefined) return value;
    if (directionDate === undefined) {
      return value.sort((a, b) => {
        if (directionCountOfView) {
          return +a.viewCount - +b.viewCount;
        } else {
          return +b.viewCount - +a.viewCount;
        }
      });
    } else {
      return value.sort((a, b) => {
        if (directionDate) {
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        } else {
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        }
      });
    }
  }
}

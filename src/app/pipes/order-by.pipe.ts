import { Pipe, PipeTransform } from '@angular/core';
import { Podcast } from '../services/podcast.service';

/**
 * order-by value['viewCount'] of direction
 * @param{Podcast[]} podcasts
 * @param{boolean|undefined} direction
 * @returns{Podcast[]}
 */
@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: Array<Podcast>, direction: boolean | undefined): Array<Podcast> {
    if (direction === undefined) return value;
    return value.sort((a, b) => {
      if (direction) {
        return +a.viewCount - +b.viewCount;
      } else {
        return +b.viewCount - +a.viewCount;
      }
    });
  }
}

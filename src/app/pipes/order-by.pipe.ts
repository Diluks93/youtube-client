import { Pipe, PipeTransform } from '@angular/core';
import { Podcast } from '../services/podcast.service';

/**
 * order-by value['viewCount'] of direction
 * @param{Podcast[]} podcasts
 * @param{boolean} direction
 * @returns{Podcast[]}
 */
@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: Array<Podcast>, direction: boolean): Array<Podcast> {
    return value.sort((a, b) => {
      if (direction) {
        return +a.viewCount - +b.viewCount;
      } else {
        return +b.viewCount - +a.viewCount;
      }
    });
  }
}

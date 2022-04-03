import { Pipe, PipeTransform } from '@angular/core';
import { Podcast } from 'src/app/services/podcast.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(podcasts: Array<Podcast>, value: string): Array<Podcast> {
    if (!value) {
      return podcasts;
    }

    return podcasts.filter((podcast) => podcast.title.toLowerCase().includes(value.toLowerCase()));
  }
}

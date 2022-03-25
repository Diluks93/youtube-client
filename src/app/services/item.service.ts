import { Injectable } from '@angular/core';
import { exampleResponse } from './example-response';

const items = exampleResponse.items;
export class Item {
  constructor(
    public id: string,
    public channelTitle: string,
    public description: string,
    public viewCount: string,
    public likeCount: string,
    public dislikeCount: string,
    public favoriteCount: string,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  getItems(): Array<Item> {
    return items.map(
      (item) =>
        new Item(
          item.id,
          item.snippet.channelTitle,
          item.snippet.description,
          item.statistics.viewCount,
          item.statistics.likeCount,
          item.statistics.dislikeCount,
          item.statistics.favoriteCount,
        ),
    );
  }

  getItemsById(itemId: string) {
    return items.find((item) => item.id === itemId);
  }
}

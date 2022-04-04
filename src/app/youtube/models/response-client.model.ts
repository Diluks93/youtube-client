export interface ResponseClient extends KindEtag {
  pageInfo: PageInfo;
  items: Array<ClientItem>;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface ClientItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export type KindEtag = Pick<ClientItem, 'kind' | 'etag'>;

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnail;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
  defaultLanguage?: 'ru' | 'en';
}

export type Thumbnail = {
  [keys in PropCharacteristics]: Characteristics;
};

export type PropCharacteristics = Required<'default' | 'medium' | 'high' | 'standard' | 'maxres'>;

export interface Characteristics {
  url: string;
  width: number;
  height: number;
}

export type Localized = {
  [keys in Required<'title' | 'description'>]: string;
};

export type Statistics = {
  [keys in PropStatistics]: string;
};

export type PropStatistics = Required<
  'viewCount' | 'likeCount' | 'dislikeCount' | 'favoriteCount' | 'commentCount'
>;

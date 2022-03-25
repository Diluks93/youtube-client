export interface ResponseClient extends KindEtag {
  pageInfo: PageInfo;
  items: Array<ClientItem>;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface ClientItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

type KindEtag = Pick<ClientItem, 'kind' | 'etag'>;

interface Snippet {
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

type Thumbnail = {
  [keys in PropCharacteristics]: Characteristics;
};

type PropCharacteristics = Required<'default' | 'medium' | 'high' | 'standard' | 'maxres'>;

interface Characteristics {
  url: string;
  width: number;
  height: number;
}

type Localized = {
  [keys in Required<'title' | 'description'>]: string;
};

type Statistics = {
  [keys in PropStatistics]: string;
};

type PropStatistics = Required<
  'viewCount' | 'likeCount' | 'dislikeCount' | 'favoriteCount' | 'commentCount'
>;

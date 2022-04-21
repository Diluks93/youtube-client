export interface ResponseClientSearch extends KindEtag {
  pageInfo: PageInfo;
  items: Array<ClientItemSearch>;
}

export type ResponseClientVideo = Pick<ResponseClientSearch, 'pageInfo'> & {
  items: Array<ClientItemVideo>;
};

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface ClientItemSearch {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  statistics: Statistics;
}

export type ClientItemVideo = Omit<ClientItemSearch, 'id'> & { id: string };

type Id = { kind: string; videoId: string };

type KindEtag = Pick<ClientItemSearch, 'kind' | 'etag'>;

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

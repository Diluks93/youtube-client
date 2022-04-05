export class Podcast {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly viewCount: string,
    readonly likeCount: string,
    readonly dislikeCount: string,
    readonly commentCount: string,
    readonly preview: string,
    readonly publishedAt: string,
    readonly width?: number,
    readonly height?: number,
  ) {}
}

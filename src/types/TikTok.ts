import { SocksProxyAgent } from 'socks-proxy-agent';

export type ScrapeType =
    | 'user'
    | 'hashtag'
    | 'trend'
    | 'music'
    | 'discover_user'
    | 'discover_hashtag'
    | 'discover_music'
    | 'single_user'
    | 'single_hashtag'
    | 'signature'
    | 'video_meta';

export interface Proxy {
    socks: boolean;
    proxy: string | SocksProxyAgent;
}

export interface Options {
    proxy?: string[] | string;
    proxyFile?: string;
    event?: boolean;
    by_user_id?: boolean;
    download?: boolean;
    bulk?: boolean;
    cli?: boolean;
    asyncBulk?: number;
    asyncDownload?: number;
    asyncScraping?: number;
    filepath?: string;
    filetype?: string;
    progress?: boolean;
    number?: number;
    userAgent?: string;
    noWaterMark?: boolean;
    remove?: string;
    fileName?: string;
    historyPath?: string;
    timeout?: number;
}
export interface TikTokConstructor {
    download: boolean;
    filepath: string;
    filetype: string;
    proxy: string[] | string;
    asyncDownload: number;
    asyncScraping: number;
    cli?: boolean;
    event?: boolean;
    progress?: boolean;
    bulk?: boolean;
    input: string;
    number: number;
    type: ScrapeType;
    by_user_id?: boolean;
    store_history?: boolean;
    historyPath?: string;
    userAgent: string;
    test?: boolean;
    noWaterMark?: boolean;
    fileName?: string;
    timeout?: number;
}

export interface Hashtags {
    id: string;
    name: string;
    title: string;
    cover: string[];
}

export interface PostCollector {
    id: string;
    text: string;
    createTime: number;
    authorMeta: {
        id: string;
        name: string;
        nickName: string;
        following: number;
        fans: number;
        heart: number;
        video: number;
        digg: number;
        verified: boolean;
        private: boolean;
        signature: string;
        avatar: string;
    };
    musicMeta: {
        musicId: string;
        musicName: string;
        musicAuthor: string;
        musicOriginal: boolean;
        playUrl: string;
    };
    covers: {
        default: string;
        origin: string;
        dynamic: string;
    };
    imageUrl: string;
    webVideoUrl?: string;
    videoUrl: string;
    videoUrlNoWaterMark: string;
    videoMeta: {
        width: number;
        height: number;
        ratio: number;
        duration: number;
    };
    diggCount: number;
    shareCount: number;
    playCount: number;
    commentCount: number;
    hashtags: Hashtags[];
    repeated?: boolean;
    downloaded: boolean;
}

export interface Result {
    collector: PostCollector[];
    zip?: string;
    json?: string;
    csv?: string;
}

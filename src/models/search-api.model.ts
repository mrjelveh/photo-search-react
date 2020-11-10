

export interface STATEVAR {
    images: Array<any>;
}

export interface PHOTOMAPPROPS {
    id: number;
    item: SEARCHPHOTO;
}

export interface SEARCHPHOTO {
    id?: number;
    created_at?: string;
    updated_at?: string;
    promoted_at?: string;
    width?: number;
    height?: number;
    color?: string;
    description?: string;
    alt_description?: string;
    urls?: URLS;
    links?: LINKS;
    categories?: Array<any>;
    likes?: any;
    user?: USERS;
    liked_by_user?: boolean;
    current_user_collections?: Array<any>;
    sponsorship?: null;
}
export interface URLS {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}
export interface LINKS {
    self: string;
    html: string;
    download: string;
    download_location: string;
}
export interface USERS {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string,
    last_name: string,
    twitter_username: null,
    portfolio_url: string,
    bio: null,
    location: string,
    links: {
        self: string,
        html: string,
        photos: string,
        likes: string,
        portfolio: string,
        following: string,
        followers: string,
    },
    profile_image: {
        small: string,
        medium: string,
        large: string,
    },
    instagram_username: string,
    total_collections: number,
    total_likes: number,
    total_photos: number,
    accepted_tos: boolean
}

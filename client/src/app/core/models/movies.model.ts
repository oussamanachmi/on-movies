export interface Movie {
    _id: string;
    title: string;
    fullplot: string;
    plot: string;
    rated: string;
    runtime: number;
    released: Date;
    year: number;
    type: string;
    imageUrl: string;
    poster: string;

    cast: string[];
    countries: string[];
    genres: string[];
    languages: string[];

    awards: {
        wins: number;
        nominations: number;
        text: string;
        _id?: string; // MongoDB ID
    };

    imdb: {
        _id: number;
        rating: number;
        votes: number;
        _id2?: string; // autre ID interne
    };

    tomatoes?: {
        viewer?: {
            rating?: number;
            numReviews?: number;
            meter?: number;
        };
        dvd?: string;
        lastUpdated?: string;
        _id?: string;
    };

    directors: string[];
    num_mflix_comments?: number;
    lastupdated?: string;
}

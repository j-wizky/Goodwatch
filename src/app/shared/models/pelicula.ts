export interface Pelicula {
    id: number,
    title: string,
    release_date: Date,
    overview: string,
    genre_ids?: number[]
    poster_path: string,
    vote_average: number,
}
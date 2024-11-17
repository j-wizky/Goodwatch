import { Genero } from "./generos";

export interface PeliculaDetalle {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: number,
    genres: Genero[],
    homepage: string,
    id: number,
    original_languaje: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: number,
    status: string,
    tagline: string,
    title: string,
    vote_average: number,
    vote_count: number,
}
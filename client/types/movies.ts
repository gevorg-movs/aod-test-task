import {IActor} from "../src/models/Actor";

export interface MovieFilterInterface {
    title: string,
    rating_from: number | null,
    rating_to: number | null,
    sort_by: string | null,
    sort_type: string | null,
    year_from?: Date,
    year_to?: Date,
    actors: IActor[],
    offset: number,
    limit: number
}
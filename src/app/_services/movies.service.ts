import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  apiKey = "39a84d3d";
  url = "https://www.omdbapi.com/?apikey=";

  constructor() {}

  searchMovie(search: string, page: number) {
    return fetch(`${this.url}${this.apiKey}&s=${search}&type=movie&page=${page}`).then((res) => res.json());
  }


  getMovie(id: string) {
    return fetch(`${this.url}${this.apiKey}&i=${id}`).then((res) => res.json());
  }
}

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  apiKey = "39a84d3d";
  url = "https://www.omdbapi.com/?apikey=";

  constructor() {}

  searchMovie(search: string) {
    return fetch(`${this.url}${this.apiKey}&s=${search}`).then((res) => res.json());
  }
}

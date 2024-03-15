import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MovieModel } from "../_models/movie.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-movie-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./movie-list.component.html",
  styleUrl: "./movie-list.component.scss",
})
export class MovieListComponent {
  @Input() movieList!: MovieModel[];
  @Output() movieSelected = new EventEmitter<string>();

  getMovie(id: string) {
    this.movieSelected.emit(id);
  }
}

import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search-movie",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./search-movie.component.html",
  styleUrl: "./search-movie.component.scss",
})
export class SearchMovieComponent {
  @Output() movieSearchOutput = new EventEmitter<string>();
  @Output() resetOutput = new EventEmitter<any>();

  placeholderText = "Type your Search and press enter";
  movieSearch = "";

  onResize() {
    this.placeholderText = window.innerWidth <= 1024 ? "Type your Search" : "Type your Search and press enter";
  }

  ngOnInit() {
    this.onResize(); // Call onResize method on component initialization to set the initial value of placeholderText
  }

  newSearchMovie() {
    this.movieSearchOutput.emit(this.movieSearch);
  }

  reset() {
    this.movieSearch = "";
    this.resetOutput.emit(this.movieSearch);
  }
}

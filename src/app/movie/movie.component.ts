import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, SimpleChanges, OnChanges, type OnInit } from "@angular/core";
import { MovieModel } from "../_models/movie.model";

@Component({
  selector: "app-movie",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./movie.component.html",
  styleUrl: "./movie.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent implements OnInit, OnChanges {
  @Input() movie!: MovieModel;

  movieSynopsis = "movieSynopsis";
  movieActor = "movieActor";
  movieReview = "movieReview";
  moviePosterUrl = "moviePosterUrl";
  stars: string[] = [];

  ngOnInit() {}

  ngOnChanges() {
    this.stars = this.convertRatingToStars(this.movie.Ratings[0].Value);
  }

  convertRatingToStars(ratingStr: string) {
    const rating = parseFloat(ratingStr.split("/")[0]) / 2;
    const numFullStars = Math.floor(rating);
    const remainder = rating - numFullStars;

    const stars = new Array(numFullStars).fill("full");

    if (remainder >= 0.5) {
      stars.push("half");
    }

    stars.push(...new Array(5 - stars.length).fill("empty"));

    return stars;
  }
}

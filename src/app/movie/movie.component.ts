import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";

@Component({
  selector: "app-movie",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./movie.component.html",
  styleUrl: "./movie.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent implements OnInit {
  movieName = "movieName";
  movieSynopsis = "movieSynopsis";
  movieActor = "movieActor";
  movieReview = "movieReview";
  moviePosterUrl = "moviePosterUrl";

  ngOnInit(): void {}
}

import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { MovieComponent } from "../movie/movie.component";
import { MoviesService } from "../_services/movies.service";
import { FormsModule } from "@angular/forms";
import { MovieModel } from "../_models/movie.model";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MovieComponent, FormsModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  movieSearch = "";
  movieList: MovieModel[] = [];
  selectedMovie: MovieModel | undefined;
  constructor(private MoviesService: MoviesService) {}

  ngOnInit(): void {}

  searchMovie(search: string) {
    console.log(search);
    this.MoviesService.searchMovie(search).then((data) => {
      console.log(data);
      this.movieList = data.Search;
    });
  }

  getMovie(movie: MovieModel) {
    console.log(movie);
    this.selectedMovie = movie;
    this.movieList = [];
  }

  reset() {
    this.movieSearch = "";
    this.movieList = [];
    this.selectedMovie = undefined;
  }
}

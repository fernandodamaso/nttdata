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
  totalResults: number = 0;
  selectedMovie: MovieModel | undefined;
  page: number = 1;
  constructor(private MoviesService: MoviesService) {}

  ngOnInit(): void {}

  searchMovie(search: string, page: number) {
    this.MoviesService.searchMovie(search, page).then((data) => {
      console.log(data);
      this.movieList = data.Search;
      this.totalResults = data.totalResults;
      this.page = page;
    });
  }

  getMovie(id: string) {
    this.MoviesService.getMovie(id).then((data) => {
      this.selectedMovie = data;
      this.movieList = [];
    });
  }

  newSearchMovie(search: string) {
    this.page = 1;
    this.searchMovie(search, this.page);
  }

  nextPage(): void {
    this.page++;
    this.searchMovie(this.movieSearch, this.page);
  }
  prevPage(): void {
    this.page--;
    this.searchMovie(this.movieSearch, this.page);
  }

  reset() {
    this.movieSearch = "";
    this.page = 0;
    this.movieList = [];
    this.selectedMovie = undefined;
  }

  get totalPages(): number {
    return Math.ceil(this.totalResults / 10);
  }
}

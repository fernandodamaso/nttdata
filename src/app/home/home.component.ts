import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { MovieComponent } from "../movie/movie.component";
import { MoviesService } from "../_services/movies.service";
import { FormsModule } from "@angular/forms";
import { MovieModel } from "../_models/movie.model";
import { MovieListComponent } from "../movie-list/movie-list.component";
import { SearchMovieComponent } from "../search-movie/search-movie.component";
import { PaginationComponent } from "../pagination/pagination.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HeaderComponent, MovieComponent, FormsModule, MovieListComponent, SearchMovieComponent, PaginationComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  movieList: MovieModel[] = [];
  totalResults: number = 0;
  selectedMovie: MovieModel | undefined;
  page: number = 1;
  searchMade: string = "";
  constructor(private MoviesService: MoviesService) {}

  ngOnInit(): void {}

  searchMovie(search: string, page: number) {
    this.MoviesService.searchMovie(search, page).then((data) => {
      this.movieList = data.Search;
      this.totalResults = data.totalResults;
      this.page = page;
      this.searchMade = search;
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
    this.searchMovie(this.searchMade, this.page);
  }
  prevPage(): void {
    this.page--;
    this.searchMovie(this.searchMade, this.page);
  }

  reset(event: any) {
    this.searchMade = "";
    this.page = 0;
    this.movieList = [];
    this.selectedMovie = undefined;
  }
}

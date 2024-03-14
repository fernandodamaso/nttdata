import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { MovieComponent } from "../movie/movie.component";
import { MoviesService } from "../_services/movies.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MovieComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  constructor(private MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.MoviesService.searchMovie("batman").then((res) => console.log(res));
  }
}

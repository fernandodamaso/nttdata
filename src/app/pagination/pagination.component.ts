import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MovieModel } from "../_models/movie.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-pagination",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.scss",
})
export class PaginationComponent {
  @Input() movieList!: MovieModel[];
  @Input() page!: number;
  @Input() totalResults!: number;
  @Output() prevOutput = new EventEmitter<string>();
  @Output() nextOutput = new EventEmitter<string>();

  nextPage(): void {
    this.nextOutput.emit();
  }
  prevPage(): void {
    this.prevOutput.emit();
  }

  get totalPages(): number {
    return Math.ceil(this.totalResults / 10);
  }
}

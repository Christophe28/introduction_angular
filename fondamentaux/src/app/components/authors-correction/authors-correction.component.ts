import { Component } from '@angular/core';
import { AuthorsCorrectionService, Author } from '../../services/authors-correction.service';

@Component({
  selector: 'app-authors-correction',
  templateUrl: './authors-correction.component.html',
  styleUrls: ['./authors-correction.component.css']
})
export class AuthorsCorrectionComponent {
  authors: Author[];
  constructor(private authorService: AuthorsCorrectionService) {
    this.authors = this.authorService.getAllAuthors();
  }
}

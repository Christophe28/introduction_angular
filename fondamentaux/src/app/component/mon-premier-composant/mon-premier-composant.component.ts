import { Component } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service';
import { AuthorsAppService, Author } from '../../services/authors-app.service';

@Component({
  //Peut fonctionner comme un sélecteur css
  selector: 'premierComposant',
  //Chemin vers le ficier html lié à ma class
  templateUrl: './mon-premier-composant.component.html',
  styleUrls: ['./mon-premier-composant.component.css']
})
export class MonPremierComposantComponent {
  criDeVictoire = "Hourra !";

  declare movies: Movie[];
  declare author: Author[];
  constructor(private moviesService:MoviesService, private authorService:AuthorsAppService) {
    this.movies = this.moviesService.getAllMovies();
    this.author = this.authorService.getAllAuthor();
    authorService.getTest();
  };

  getBanane() {
    return "banane";
  }
}
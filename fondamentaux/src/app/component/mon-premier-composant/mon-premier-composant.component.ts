import { Component } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service';

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

  constructor(private moviesService:MoviesService) {
    this.movies = this.moviesService.getAllMovies();
  };

  getBanane() {
    return "banane";
  }
}
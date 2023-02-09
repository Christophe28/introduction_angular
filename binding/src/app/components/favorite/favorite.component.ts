import { Component } from '@angular/core';

enum Stars {
  emptyStar = "☆",
  fullStar = "★"
}

enum StarCorrection {
  EMPTY = "☆",
  FILLED = "★"
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent {
  galaxy_gardin_is_full:boolean = false;
  galaxy_gardian:string = Stars.emptyStar;

  star = StarCorrection.EMPTY;

  isEmpty:boolean = false;

  toggleIsFavorite() {
    this.star = this.star === StarCorrection.EMPTY ? StarCorrection.FILLED : StarCorrection.EMPTY;
  }

  changeStar(elem:HTMLElement) {
    this.galaxy_gardin_is_full = !this.galaxy_gardin_is_full;
    this.galaxy_gardin_is_full ? elem.textContent = Stars.fullStar : elem.textContent = Stars.emptyStar
  }
}

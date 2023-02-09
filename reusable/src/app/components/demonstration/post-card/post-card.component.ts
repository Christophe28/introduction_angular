import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})

export class PostCardComponent {
  //@Input() permet de faire passer des données de composants en composant. On peut aussi lui donner un argument entre guillement
  @Input("postTitle") title = "Mon titre par défaut";
  //On peut utiliser un alias, qu'on passera en argument de notre décorateur Output pour lier l'évènement
  @Output() clickTitle = new EventEmitter(); 

  clickedTitle() {
    this.clickTitle.emit(this.title);
  }
}
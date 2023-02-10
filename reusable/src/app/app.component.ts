import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable';

  clickCountPerAnimal = {
    "otter": 42,
    "bat": 36
  }
  
  handleClickTitle(title:string) {
    console.log(`On clique sur le titre qui est ===> ${title}`);
  }

  consoleClick(info:keyof typeof this.clickCountPerAnimal) {
    this.clickCountPerAnimal[info] = this.clickCountPerAnimal[info] + 1;
  }
}
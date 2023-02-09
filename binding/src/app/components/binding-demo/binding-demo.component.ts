import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})

export class BindingDemoComponent {
  isNotAllowedToWrite = false;
  isPremium = true;
  username = "Malinx le malin"

  changeUserName(input: HTMLInputElement) {
    this.username = input.value;
    input.value = "";
  }
}
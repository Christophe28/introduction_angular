import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.css']
})
export class ExoComponent {
  //Exo component va gagner un attribut title qui permettra de définir notre propriété
  @Input() declare title:string;
  @Input() isHidden:boolean = true;
  @Input() declare manager:string;
  @Input() declare clickCount:number; 
  @Output() emitConsoleClick = new EventEmitter();

  toggleContentVisibility() {
    this.emitConsoleClick.emit();
    this.isHidden = !this.isHidden;
  }
}
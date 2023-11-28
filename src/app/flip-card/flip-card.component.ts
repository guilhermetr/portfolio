import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent {

  @Input() title: string = "";
  @Input() imagePath: string = "";

  isFlipped: boolean = false;

  constructor() {}
  
  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }
}

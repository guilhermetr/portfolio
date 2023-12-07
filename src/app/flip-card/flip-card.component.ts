import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() imagePath: string = "";
  @Input() level!: string;
  
  isFlipped: boolean = false;    
        
  constructor() {}

  ngOnInit(): void {}  
  
  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }
}

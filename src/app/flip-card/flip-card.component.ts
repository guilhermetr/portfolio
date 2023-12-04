import { Component, Input, OnInit } from '@angular/core';
import { LevelService } from '../level.service';

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
        
  constructor(private levelService: LevelService) {}

  ngOnInit(): void {}  
  
  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }
}

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

  currentLevel!: string;
  isFlipped: boolean = false;    
        
  constructor(private levelService: LevelService) {}

  ngOnInit(): void {
    this.levelService.currentLevel$.subscribe((level: string) => {
      this.currentLevel = level;
    });
  }  
  
  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }
}

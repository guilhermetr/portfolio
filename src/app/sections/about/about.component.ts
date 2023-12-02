import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/app/level.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  currentLevel!: string;

  constructor(private levelService: LevelService) {}
  
  ngOnInit(): void {
    this.levelService.currentLevel$.subscribe((level: string) => {
      this.currentLevel = level;
    });
  }  

}

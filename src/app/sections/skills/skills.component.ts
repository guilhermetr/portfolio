import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/app/level.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  currentLevel!: string;
        
  constructor(private viewportScroller: ViewportScroller, private levelService: LevelService) {}

  ngOnInit(): void {
    this.levelService.currentLevel$.subscribe((level: string) => {
      this.currentLevel = level;
    });
  }  

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);   
  }  

}

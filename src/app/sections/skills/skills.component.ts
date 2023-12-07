import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LevelService } from 'src/app/level.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  @Input() level!: number;
        
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}  

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);   
  }  

  getLevelClass(): string {
    return `level${this.level}`;
  }

}

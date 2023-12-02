import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { LevelService } from './level.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentLevel!: string;

  constructor(private viewportScroller: ViewportScroller, private levelService: LevelService) {}

  ngOnInit(): void {
    this.levelService.currentLevel$.subscribe((level: string) => {
      this.currentLevel = level;
    });
  }  

  public scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}

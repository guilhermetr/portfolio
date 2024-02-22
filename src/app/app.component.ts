import { Component, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { LevelService } from './level.service';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChildren(BodyComponent) bodyComponents!: QueryList<BodyComponent>;

  currentLevel: number = 1;
  upgradeAnimationState: 'start' | 'end' = 'start';

  constructor(private viewportScroller: ViewportScroller, private levelService: LevelService) {}

  ngOnInit(): void {
    this.levelService.currentLevel$.subscribe((level) => {
      const container = document.querySelector(`.container.level${level}`)!;
      if (container) {
        if (level > this.currentLevel) {        
        container.classList.remove('hidden');
          const body = this.getBodyComponent(level)!;             
          body.startAnimation();          
        } else {
          const body = this.getBodyComponent(this.currentLevel)!;
          body.reverseAnimation();
        }
      }           
      this.currentLevel = level;
    });

    setTimeout(() => {
      if (!this.levelService.hasUserUpgraded)
        this.levelService.setCurrentLevel(this.levelService.getCurrentLevel() + 1);
    }, 5000);
  }

  startAnimation(body: any) {
    body.startAnimation();
  }

  private getBodyComponent(level: number): BodyComponent | undefined {
    return this.bodyComponents.find((body: any) => body.level === level);
  }

  public scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  convertToNumber(value: string): number {
    return parseInt(value);
  }

  getLevelClass(level: number): string {
    return `level${level}`;
  }

}

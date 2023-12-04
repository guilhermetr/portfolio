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

  currentLevel!: string;
  upgradeAnimationState: 'start' | 'end' = 'start';

  constructor(private viewportScroller: ViewportScroller, private levelService: LevelService) {}

  ngOnInit(): void {
    this.levelService.currentLevel$.subscribe((level) => {
      const newContainer = document.querySelector(`.container.${level}`)!;
      if (newContainer) {
        newContainer.classList.remove('hidden');
        const body = this.getBodyComponent(level);
        if (body) {
          body.startAnimation();
        }        
      }      

    });
  }

  startAnimation(body: any) {
    body.startAnimation();
  }

  private getBodyComponent(level: string): BodyComponent | undefined {
    return this.bodyComponents.find((body: any) => body.level === level);
  }

  public scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}

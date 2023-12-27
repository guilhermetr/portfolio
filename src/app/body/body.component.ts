import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';

const animationDelay = 1500;

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('clipPathAnimation', [
      state('start', style({
        clipPath: 'circle(0px at 50% 50%)',
      })),
      state('end', style({
        clipPath: 'circle(100% at 50% 50%)',
      })),
      transition('start => end', animate(`${animationDelay}ms ease-out`)),
      transition('end => start', animate(`${animationDelay}ms ease-out`)),
    ]),
  ],
})
export class BodyComponent implements AfterViewInit {

  @Input()level!: number;
  animationState: 'start' | 'end' = 'start';
  
  ngAfterViewInit(): void {
    if (this.level != 1) {      
      const container = document.querySelector(`.container.level${this.level}`)!;
      container.classList.add('hidden');        
    }
  }

  startAnimation() {
    this.animationState = 'end';
  }

  reverseAnimation() {
    this.animationState = 'start';
    const previousContainer = document.querySelector(`.container.level${this.level}`)!;

    setTimeout(() => {
      if (this.animationState == 'start') {
        previousContainer.classList.add('hidden');
      }      
    }, animationDelay);
  }

  getLevelClass(): string {
    return `level${this.level}`;
  }

}

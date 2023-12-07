import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';

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
      transition('start => end', animate('1500ms ease-out')),
      transition('end => start', animate('1500ms ease-out')),
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
  }

  getLevelClass(): string {
    return `level${this.level}`;
  }

}

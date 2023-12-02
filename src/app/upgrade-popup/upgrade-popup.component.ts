import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrade-popup',
  templateUrl: './upgrade-popup.component.html',
  styleUrls: ['./upgrade-popup.component.scss'],
  animations: [
    trigger('slideDown', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden',
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
        overflow: 'hidden',
      })),
      transition('collapsed <=> expanded', [
        animate('0.3s ease'),
      ]),
    ]),
    trigger('resizeCard', [
      state('collapsed', style({
        width: '160px',
      })),
      state('expanded', style({
        width: '320px',
      })),
      transition('collapsed <=> expanded', [
        animate('0.3s ease'),
      ]),
    ]),
  ],
})
export class UpgradePopupComponent implements OnInit {
  
  messageBoxAnimationState = 'expanded'; // Initial state
  cardAnimationState = 'expanded'; // Initial state
  
  constructor() { }

  ngOnInit(): void { }

  toggleAnimation() {
    this.messageBoxAnimationState = this.messageBoxAnimationState === 'collapsed' ? 'expanded' : 'collapsed';

    // Delays the resizing animation until after the sliding animation is complete
    setTimeout(() => {
      this.cardAnimationState = this.cardAnimationState === 'collapsed' ? 'expanded' : 'collapsed';
    }, 1); // 1ms creates a diagonal sliding effect
  }

}

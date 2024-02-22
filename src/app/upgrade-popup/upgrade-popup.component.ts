import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { LevelService } from '../level.service';

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
        height: '55px',
        opacity: '1',
        overflow: 'hidden',
      })),
      transition('collapsed <=> expanded', [
        animate('0.3s ease'),
      ]),
    ]),
    trigger('resize', [
      state('collapsed', style({
        width: '110px',
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
  
  currentLevel!: number;
  messageBoxState: 'expanded' | 'collapsed' = 'expanded';
  cardState: 'expanded' | 'collapsed' = 'expanded';
  message!: string;
  
  constructor(private levelService: LevelService) { }

  ngOnInit(): void { 
    this.levelService.currentLevel$.subscribe((level) => {
      this.currentLevel = level;
      this.message = this.levelService.getLevelMessage(level);
    })
  }

  toggleAnimation() {
    this.messageBoxState = this.messageBoxState === 'collapsed' ? 'expanded' : 'collapsed';

    // Delays the resizing animation until after the sliding animation is complete
    setTimeout(() => {
      this.cardState = this.cardState === 'collapsed' ? 'expanded' : 'collapsed';
    }, 1); // 1ms creates a diagonal sliding effect
  }

  upgrade(): void {
    const currentLevel = this.levelService.getCurrentLevel();    
    
    if (currentLevel > 2)
      return;

    if (currentLevel === 2 && this.messageBoxState === 'expanded') {
      this.toggleAnimation();
    }

    this.levelService.setCurrentLevel(this.levelService.getCurrentLevel() + 1);
    
  }

  downgrade(): void {
    const currentLevel = this.levelService.getCurrentLevel();    
    
    if (currentLevel === 1)
      return;

    this.levelService.setCurrentLevel(this.levelService.getCurrentLevel() - 1);
  }

}

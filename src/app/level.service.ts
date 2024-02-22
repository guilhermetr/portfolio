
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private currentLevelSubject = new BehaviorSubject<number>(1);
  currentLevel$ = this.currentLevelSubject.asObservable();
  currentLevel: number = 1;
  hasUserUpgraded: boolean = false;

  messages: { [key: number]: string[] } = {
    1: ['Not a fan of how the website looks?', 'Don\'t like the website\'s design?'],
    2: ['Not completely sold on the changes?', 'Didn\'t quite win you over?'],
    3: ['You\'ve reached the final level!'],
  }

  getCurrentLevel(): number {
    return this.currentLevel;
  }

  setCurrentLevel(level: number): void {    
    this.currentLevelSubject.next(level);
    this.currentLevel = level;
    if (!this.hasUserUpgraded) this.hasUserUpgraded = true;
  }

  getLevelMessage(level: number): string {
    const levelMessages = this.messages[level];
    const randomIndex = Math.floor(Math.random() * levelMessages.length);
    return levelMessages[randomIndex];    
  }
}

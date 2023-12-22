
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private currentLevelSubject = new BehaviorSubject<number>(1);
  currentLevel$ = this.currentLevelSubject.asObservable();
  currentLevel: number = 1;

  messages: { [key: number]: string[] } = {
    1: ['Not a fan of how the website looks?', 'Don\'t like the website\'s design?'],
    2: ['Not completely sold on the changes?', 'Didn\'t quite win you over?'],
    3: ['The next one is the last, I promise', 'Get ready for the grand finale'],
    4: ['Thank you for reaching the final level!']
  }

  getCurrentLevel(): number {
    return this.currentLevel;
  }

  setCurrentLevel(level: number): void {    
    this.currentLevelSubject.next(level);
    this.currentLevel = level;
  }

  getLevelMessage(level: number): string {
    const levelMessages = this.messages[level];
    const randomIndex = Math.floor(Math.random() * levelMessages.length);
    return levelMessages[randomIndex];    
  }
}

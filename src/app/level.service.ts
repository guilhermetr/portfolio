
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private currentLevelSubject = new BehaviorSubject<number>(1);
  currentLevel$ = this.currentLevelSubject.asObservable();
  currentLevel: number = 1;

  getCurrentLevel(): number {
    return this.currentLevel;
  }

  setCurrentLevel(level: number): void {    
    this.currentLevelSubject.next(level);
    this.currentLevel = level;
  }
}

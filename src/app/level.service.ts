
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private currentLevelSubject = new BehaviorSubject<string>('level1');
  currentLevel$ = this.currentLevelSubject.asObservable();

  setCurrentLevel(level: string): void {
    this.currentLevelSubject.next(level);
  }
}

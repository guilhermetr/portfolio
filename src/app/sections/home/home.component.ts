import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() level!: number;
  
  constructor() {}

  getLevelClass(): string {
    return `level${this.level}`;
  }
  
}

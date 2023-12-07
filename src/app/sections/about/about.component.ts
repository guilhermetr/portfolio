import { Component, Input, OnInit } from '@angular/core';
import { LevelService } from 'src/app/level.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() level!: number;

  constructor() {}
  
  ngOnInit(): void {}

  getLevelClass(): string {
    return `level${this.level}`;
  }

}

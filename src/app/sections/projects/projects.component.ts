import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/app/level.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  currentLevel!: string;

  constructor(private levelService: LevelService) {}
  
  ngOnInit(): void {
    this.levelService.currentLevel$.subscribe((level: string) => {
      this.currentLevel = level;
    });
  }  
  
}

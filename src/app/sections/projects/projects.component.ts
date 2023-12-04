import { Component, Input, OnInit } from '@angular/core';
import { LevelService } from 'src/app/level.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() level!: string;

  constructor() {}
  
  ngOnInit(): void {}  
  
}

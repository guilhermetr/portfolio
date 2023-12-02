import { Component, OnInit } from '@angular/core';
import { LevelService } from 'src/app/level.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  currentLevel!: string;

  constructor(private levelService: LevelService) {}
  
  ngOnInit(): void {
    this.levelService.currentLevel$.subscribe((level: string) => {
      this.currentLevel = level;
    });
  }  
  
}

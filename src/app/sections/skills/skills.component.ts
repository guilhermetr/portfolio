import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);   
  }  

}

import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() level!: string;
  isNavbarOpened = false;
  
  constructor(private viewportScroller: ViewportScroller, private el: ElementRef) {}
 
  ngOnInit(): void {}

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.isNavbarOpened = false;
  }

  scrollToHome(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.isNavbarOpened = false;
  }

  toggleNavbar() {
    this.isNavbarOpened = !this.isNavbarOpened;
  }

  // For closing the navbar in small screens when the user clicks outside it
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      // Click occurred outside of the navbar, close it
      this.isNavbarOpened = false;
    }
  }
}

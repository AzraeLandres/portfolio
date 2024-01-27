import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  navFunc() {
    let nav = document.getElementById('nav');

    if (nav?.classList.contains('active')) {
      nav.classList.remove('active');
    } else {
      nav?.classList.add('active');
    }
  }
  constructor() {}
}

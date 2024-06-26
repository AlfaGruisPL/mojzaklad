import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hamburger-menu-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent {
  openHamburger = false;

  open() {
    this.openHamburger = !this.openHamburger;
  }

  close(isburger = true) {
    if (isburger) return;
    this.openHamburger = false;
  }
}

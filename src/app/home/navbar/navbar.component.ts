import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faAngleDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NavButton } from './navButtons.interface';
import { NgClass, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    FaIconComponent,
    NgForOf,
    NgIf,
    NgOptimizedImage,
    NgClass,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor() {}
  navButtons: NavButton[] = [
    { label: 'Home', submenu: false },
    {
      label: 'Men',
      submenu: true,
      isSubmenuOpen: false,
      clickHandler: () => this.openNavContent('Men'),
      submenuContent: [
        { label: 'Stole', submenu: false },
        { label: 'Jackets', submenu: false },
      ],
    },
    {
      label: 'Women',
      submenu: true,
      isSubmenuOpen: false,
      clickHandler: () => this.openNavContent('Women'),
      submenuContent: [
        { label: 'Jackets', submenu: false },
        { label: 'Suits', submenu: false },
        { label: 'Stole', submenu: false },
        { label: 'Saree', submenu: false },
        { label: 'Kani', submenu: false },
        { label: 'Ethnic Weave', submenu: false },
        { label: 'Luxury Heritage', submenu: false },
      ],
    },
    {
      label: 'Collections',
      submenu: false,
      clickHandler: () => this.openNavContent('Collections'),
    },
    { label: 'About', submenu: false },
  ];
  cart = faCartShopping;
  angleDown = faAngleDown;

  toggleSubMenu(navButton: NavButton) {
    this.navButtons.forEach((button) => {
      if (button === navButton) {
        button.isSubmenuOpen = !button.isSubmenuOpen;
      } else {
        button.isSubmenuOpen = false;
      }
    });
  }
  submenuMouseOut(navButton: NavButton) {
    navButton.isSubmenuOpen = false;
  }

  openNavContent(navMenu: string) {
    console.log('open nav menu', navMenu);
  }
  navigateToCart(path: string) {
    console.log('navigate to cart', path);
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faCartShopping, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NavButton } from './navButtons.interface';
import { NgForOf, NgIf } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    FaIconComponent,
    NgForOf,
    NgIf,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor() {
  }
  navButtons : NavButton[] = [
    { label: 'Home', submenu : false},
    { label: 'Men', submenu : true, clickHandler: () => this.openNavContent('Men')},
    { label: 'Women', submenu : true, clickHandler: () => this.openNavContent('Women')},
    { label: 'Collections', submenu : true, clickHandler: () => this.openNavContent('Collections')},
    { label: 'About', submenu : false}
    ];
  cart = faCartShopping;
  angleDown = faAngleDown;

  openNavContent(navMenu:string) {
    console.log('open nav menu', navMenu);
  }
  navigateToCart(path:string) {
    console.log('navigate to cart');
  }
}

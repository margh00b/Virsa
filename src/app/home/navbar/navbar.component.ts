import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    MatButton,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  openNavContent(navMenu:string) {
    console.log('open nav menu');
  }
  navigateToCart(path:string) {
    console.log('navigate to cart');
  }
}

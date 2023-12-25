import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {
    this.DetermineNavbarUsage();
  }
  useNavbar: boolean = true;
  public DetermineNavbarUsage() {
    this.router.events.subscribe((event: any) => {
      if (
        event instanceof NavigationEnd &&
        this.router.url == '/unauthorized'
      ) {
        this.useNavbar = false;
      }
    });
  }
}

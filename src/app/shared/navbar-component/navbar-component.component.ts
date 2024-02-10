import {
  AfterViewInit,
  Component,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CookieHelperService } from '../../core/services/cookie-helper-service/cookie-helper.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.scss',
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private cookieService: CookieHelperService
  ) {
    this.DetermineNavbarUsage();
    this.CheckAuth();
  }

  isAuthenticated: boolean = false;
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

  public CheckAuth() {
    var jwt = this.cookieService.getCookies('jwt');
    this.isAuthenticated = true ? jwt != '' : false;
  }

  public Logout() {
    this.cookieService.removeAllCookies();
    this.router.navigateByUrl('/main').then(() => {
      window.location.reload();
    });
  }
}

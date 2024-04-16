import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader-service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public loader: LoaderService) {}
  title = 'eComm.WEB';
}

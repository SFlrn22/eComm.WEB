import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { LoaderService } from './core/services/loader-service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterContentChecked {
  constructor(public loader: LoaderService, private ref: ChangeDetectorRef) {}
  ngAfterContentChecked() {
    this.ref.detectChanges();
  }
  title = 'eComm.WEB';
}

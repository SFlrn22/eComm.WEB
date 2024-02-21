import { Component } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  isRecording: boolean = false;

  startRecording() {
    this.isRecording = true;
    console.log('start');
  }

  stopRecording() {
    this.isRecording = false;
    console.log('stop');
  }
}

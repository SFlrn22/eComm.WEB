import { Component } from '@angular/core';
import { RecordingService } from '../../core/services/recording-service/recording.service';
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  constructor(private recordingService: RecordingService) {}
  isRecording: boolean = false;

  products: Product[] = [
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
  ];

  startRecording() {
    this.isRecording = true;
    this.recordingService.StartRecording();
  }

  stopRecording() {
    const blob = this.recordingService.StopRecording();
    this.isRecording = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../core/services/product-service/product.service';
import { ImageSource } from '../../core/models/ImageSource';

@Component({
  selector: 'app-find-source-page',
  templateUrl: './find-source-page.component.html',
  styleUrl: './find-source-page.component.scss',
})
export class FindSourcePageComponent {
  private subscription: Subscription | undefined;
  imageSource: ImageSource | undefined;

  constructor(private productService: ProductService) {}

  uploadFile(files: any) {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    if (files.length === 0) {
      return;
    }

    const formData = new FormData();
    let fileToUpload = <File>files[0];

    formData.append('file', fileToUpload, fileToUpload.name);
    try {
      this.subscription = this.productService
        .getImageSource(formData)
        .subscribe((data: ImageSource) => {
          this.imageSource = data;
        });
    } catch {
      if (this.subscription && !this.subscription.closed) {
        this.subscription.unsubscribe();
      }
    }
  }
}

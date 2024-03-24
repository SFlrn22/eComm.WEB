import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrl: './favorite-product.component.scss',
})
export class FavoriteProductComponent {
  @Input() productDetails = {} as Product;
}

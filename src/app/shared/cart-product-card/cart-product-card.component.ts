import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/Product';
import { CartProduct } from '../../core/models/CartProduct';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrl: './cart-product-card.component.scss',
})
export class CartProductCardComponent {
  @Input() productDetails = {} as CartProduct;
}

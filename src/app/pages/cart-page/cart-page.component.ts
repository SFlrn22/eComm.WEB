import { Component } from '@angular/core';
import { CartProduct } from '../../core/models/CartProduct';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  productsInfo: CartProduct[] = [];
}

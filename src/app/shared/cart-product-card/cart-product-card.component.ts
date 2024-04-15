import { Component, Input } from '@angular/core';
import { CartProduct } from '../../core/models/CartProduct';
import { CartService } from '../../core/services/cart-service/cart-service.service';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrl: './cart-product-card.component.scss',
})
export class CartProductCardComponent {
  @Input() productDetails = {} as CartProduct;

  constructor(private cartService: CartService) {}
  add() {
    this.cartService
      .addToCart(this.productDetails.bookId, 1)
      .subscribe((data) => {
        this.productDetails.count += 1;
        console.log(data);
      });
  }

  subtract() {
    this.cartService
      .removeFromCart(this.productDetails.bookId)
      .subscribe((data) => {
        this.productDetails.count -= 1;
        console.log(data);
      });
  }
}

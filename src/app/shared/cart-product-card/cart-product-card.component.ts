import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from '../../core/models/CartProduct';
import { CartService } from '../../core/services/cart-service/cart-service.service';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrl: './cart-product-card.component.scss',
})
export class CartProductCardComponent implements OnInit {
  @Input() productDetails = {} as CartProduct;

  pricePerItem: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.pricePerItem = this.productDetails.price / this.productDetails.count;
  }

  add() {
    this.cartService
      .addToCart(this.productDetails.bookID, 1)
      .subscribe((data) => {
        this.productDetails.count += 1;
        window.location.reload();
      });
  }

  subtract() {
    this.cartService
      .removeFromCart(this.productDetails.bookID)
      .subscribe((data) => {
        this.productDetails.count -= 1;
        window.location.reload();
      });
  }
}

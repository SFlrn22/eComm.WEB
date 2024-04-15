import { Component } from '@angular/core';
import { CartProduct } from '../../core/models/CartProduct';
import { PaymentService } from '../../core/services/payment-service/payment-service.service';
import { CartService } from '../../core/services/cart-service/cart-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  productsInfo: CartProduct[] = [];
  constructor(
    private paymentService: PaymentService,
    private cartService: CartService
  ) {}
  createSession() {
    console.log('Created session');
  }
}

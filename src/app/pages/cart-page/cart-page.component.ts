import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../../core/models/CartProduct';
import { PaymentService } from '../../core/services/payment-service/payment-service.service';
import { CartService } from '../../core/services/cart-service/cart-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent implements OnInit {
  productsInfo: CartProduct[] = [];
  totalAmount: number = 0;
  constructor(
    private paymentService: PaymentService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getActiveCart().subscribe((data: any) => {
      console.log(data);
      this.productsInfo = data.data.products;
      this.totalAmount = data.data.totalAmount;
    });
  }

  createSession() {
    this.paymentService.createPaymentSession().subscribe((data: any) => {
      console.log(data.data);
      window.location.href = data.data;
    });
  }
}

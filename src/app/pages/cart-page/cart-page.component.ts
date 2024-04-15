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
      this.productsInfo = data.data.Products;
      this.totalAmount = data.data.TotalAmount;
    });
  }

  createSession() {
    this.paymentService.createPaymentSession().subscribe((url: string) => {
      window.location.href = url;
    });
  }
}

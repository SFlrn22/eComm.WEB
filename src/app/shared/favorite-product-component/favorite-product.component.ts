import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/models/Product';
import { CartService } from '../../core/services/cart-service/cart-service.service';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrl: './favorite-product.component.scss',
})
export class FavoriteProductComponent implements OnInit {
  @Input() productDetails: any;
  fillStarArray: boolean[] = [false, false, false, false, false];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.defaultStars();
  }

  defaultStars() {
    for (let i = 0; i < this.fillStarArray.length; i++) {
      if (i < this.productDetails.averageRating) {
        this.fillStarArray[i] = true;
      } else {
        this.fillStarArray[i] = false;
      }
    }
  }
  addToCart() {
    this.cartService
      .addToCart(this.productDetails!.bookID, 1)
      .subscribe((data) => {
        console.log(data);
      });
  }
}

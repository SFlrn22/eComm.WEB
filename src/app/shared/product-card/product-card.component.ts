import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/models/Product';
import { FavoriteService } from '../../core/services/favorite-service/favorite.service';
import { AddToFavoritesRequest } from '../../core/models/AddToFavoritesRequest';
import { ProductService } from '../../core/services/product-service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input() productDetails = {} as Product;
  @Input() isFavorite: boolean = false;

  fillStarArray: boolean[] = [false, false, false, false, false];
  request = {} as AddToFavoritesRequest;

  constructor(
    private favoriteService: FavoriteService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.defaultStars();
  }

  handleFavoriteClick() {
    const isbn = this.productDetails.isbn;
    this.request.isbn = isbn;
    this.favoriteService.addToFavorites(this.request).subscribe((data) => {
      if (data.isSuccess == true) {
        this.isFavorite = !this.isFavorite;
        if (this.isFavorite == true) {
          this.favoriteService.addToFavoriteArray(isbn);
        } else {
          this.favoriteService.removeFromFavoriteArray(isbn);
        }
      }
    });
  }

  hanldeStarHover(index: number) {
    for (let i = 0; i <= index; i++) {
      this.fillStarArray[i] = true;
    }
  }
  hanldeStarLeave(index: number) {
    this.fillStarArray[index] = false;
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
  submitStarReview() {
    var count: number = this.fillStarArray.filter(
      (value) => value === true
    ).length;
    this.productService
      .rateProduct({ isbn: this.productDetails.isbn, rating: count })
      .subscribe((data) => {
        if (data.isSuccess == true) {
          this.productDetails.averageRating = count;
        }
      });
  }
}

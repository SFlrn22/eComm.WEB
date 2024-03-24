import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/models/Product';
import { FavoriteService } from '../../core/services/favorite-service/favorite.service';
import { AddToFavoritesRequest } from '../../core/models/AddToFavoritesRequest';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() productDetails = {} as Product;
  @Input() isFavorite: boolean = false;
  request = {} as AddToFavoritesRequest;

  constructor(private favoriteService: FavoriteService) {}

  handleFavoriteClick() {
    this.request.isbn = this.productDetails.isbn;
    this.favoriteService.addToFavorites(this.request).subscribe((data) => {
      console.log(data);
      if (data.isSuccess == true) {
        this.isFavorite = !this.isFavorite;
      }
    });
  }
}

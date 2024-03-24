import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/Product';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../core/services/product-service/product.service';
import { FavoriteService } from '../../core/services/favorite-service/favorite.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.scss',
})
export class FavoritePageComponent implements OnInit {
  userId: string | null = '';

  product: Product = {
    isbn: '0195153448',
    title: 'Classical Mythology',
    author: 'Mark P. O. Morford',
    publisher: 'Oxford University Press',
    publicationYear: '2002',
    imageUrlM: 'http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg',
  };

  productsInfo: Product[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.favoriteService.getFavoritesInfo().subscribe((data: any) => {
        this.productsInfo = data.data;
      });
    });
  }
}

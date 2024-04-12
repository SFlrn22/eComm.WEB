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

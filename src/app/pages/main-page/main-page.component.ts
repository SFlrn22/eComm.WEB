import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../core/models/Product';
import { ProductService } from '../../core/services/product-service/product.service';
import { FavoriteService } from '../../core/services/favorite-service/favorite.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  public slides = [
    {
      src: 'https://www.channelengine.com/hubfs/Blogs/2023-08/AI%20Ecommerce.jpg',
    },
    {
      src: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      src: 'data:image/jpeg;base64,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',
    },
    {
      src: 'https://www.hostgator.com/blog/wp-content/uploads/2021/12/create-coupon-strategy-for-ecommerce-store.jpeg',
    },
  ];

  topTenProducts: Product[] = [];
  favoritesLoaded: boolean = false;

  constructor(
    private productService: ProductService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.productService.getTopTen().subscribe((data: Product[]) => {
      this.topTenProducts = data;
    });

    this.favoriteService.getFavorites().subscribe((data: any) => {
      this.favoriteService.setFavoritesArray(data.data);
      this.favoritesLoaded = true;
    });
  }
}

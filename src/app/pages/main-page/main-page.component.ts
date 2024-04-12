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
      src: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Fyh2mrw4L._AC_UF1000,1000_QL80_.jpg',
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
      console.log(data);
    });

    this.favoriteService.getFavorites().subscribe((data: any) => {
      this.favoriteService.setFavoritesArray(data.data);
      this.favoritesLoaded = true;
    });
  }
}

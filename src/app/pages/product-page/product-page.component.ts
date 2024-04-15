import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../core/services/product-service/product.service';
import { Product } from '../../core/models/Product';
import { CartService } from '../../core/services/cart-service/cart-service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  isbn: string | null = '';
  productInfo: Product | null = null;
  itemBasedRecommendations: Product[] = [];
  contentBasedRecommendations: Product[] = [];
  qrCodeValue: string = 'https://isbnsearch.org/isbn/';
  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.isbn = params.get('isbn');
      this.qrCodeValue += this.isbn;
      const queryParams = {
        filterColumn: 'ISBN',
        filterValue: this.isbn,
      };
      this.productService.getProducts(queryParams).subscribe((data: any) => {
        this.productInfo = data.data.productList[0];
      });

      const queryParamsRec = {
        isbn: this.isbn,
      };

      this.productService
        .getItemBasedRecommendations(queryParamsRec)
        .subscribe((data: any) => {
          this.itemBasedRecommendations = data;
        });

      this.productService
        .getContentBasedRecommendations(queryParamsRec)
        .subscribe((data: any) => {
          this.contentBasedRecommendations = data;
        });
    });
  }

  addToCart() {
    this.cartService.addToCart(this.productInfo!.id, 1).subscribe((data) => {
      console.log(data);
    });
  }
}

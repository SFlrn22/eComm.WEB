import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() productDetails = {} as Product;
  isFavorite: boolean = true;
}

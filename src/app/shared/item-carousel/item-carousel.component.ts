import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  Injectable,
  ViewChild,
} from '@angular/core';
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrl: './item-carousel.component.scss',
})
@Injectable()
export class ItemCarouselComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  products: Product[] = [
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
    {
      name: 'abc',
      price: 24,
      url: 'https://lcdn.altex.ro/resize/media/catalog/product/v/i/2bd48d28d1c32adea0e55139a4e6434a/vivobook_go_15_mixed_black_non_fingerprint_non_backlit_1_971cf4ba.jpg',
    },
  ];
  totalCards: number = this.arr.length;
  currentPage: number = 1;
  pagePosition: string = '0%';
  cardsPerPage: number = 0;
  totalPages: number = 0;
  overflowWidth: string = '';
  cardWidth: string = '';
  containerWidth: number = 0;
  @ViewChild('container', { static: true, read: ElementRef })
  container: ElementRef | undefined;
  @HostListener('window:resize') windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${
      this.totalPages * 10
    }px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${
      this.cardsPerPage * 10
    }px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container!.nativeElement.offsetWidth / 300);
  }

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${
      10 * (this.currentPage - 1)
    }px)`;
  }
}

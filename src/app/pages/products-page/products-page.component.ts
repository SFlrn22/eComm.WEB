import { Component, OnInit } from '@angular/core';
import { RecordingService } from '../../core/services/recording-service/recording.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../core/models/Product';
import { ProductService } from '../../core/services/product-service/product.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent implements OnInit {
  numberOfPages: number = 0;
  pageNumber: number = 0;
  itemsPerPage: number = 10;
  isRecording: boolean = false;
  pageNumbers: number[] = [1, 2, 3];
  isActive: boolean[] = [true, false, false];
  isDisabledPrev: boolean = true;
  isDisabledNext: boolean = false;

  searchForm: FormGroup | any = null;

  productList: Product[] = [];

  constructor(
    private productService: ProductService,
    private recordingService: RecordingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      title: new FormControl(''),
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.productService.getProducts(params).subscribe((data: any) => {
        this.numberOfPages = data.data.productCount / this.itemsPerPage;
        this.productList = data.data.productList;

        for (let i = 0; i < this.pageNumbers.length; i++) {
          if (
            this.isActive[i] == true &&
            this.pageNumbers[i] == Math.ceil(this.numberOfPages)
          ) {
            this.isDisabledNext = true;
            break;
          } else {
            this.isDisabledNext = false;
          }
        }
      });
    });
  }

  paginationButtonClicked(btnNumber: number): void {
    this.router.navigate(['/products'], {
      queryParams: {
        pageNumber: this.pageNumbers[btnNumber - 1],
        itemsPerPage: this.itemsPerPage,
      },
      queryParamsHandling: 'merge',
    });
    this.isActive = this.isActive.map(() => false);
    this.isActive[btnNumber - 1] = true;
  }

  next() {
    var position = this.isActive.indexOf(true);

    if (position == 2) {
      this.pageNumbers = this.pageNumbers.map((page) => page + 3);
      if ((this.pageNumber = this.numberOfPages)) {
        this.isDisabledNext = true;
      } else {
        this.isDisabledNext = false;
      }

      this.isActive[position] = false;
      this.isActive[0] = true;
    } else {
      this.isActive[position] = false;
      this.isActive[position + 1] = true;
    }

    if (this.pageNumbers[0] == 1 && this.isActive[0] == false) {
      this.isDisabledPrev = false;
    }

    this.router.navigate(['/products'], {
      queryParams: {
        pageNumber: this.pageNumbers[this.isActive.indexOf(true)],
        itemsPerPage: this.itemsPerPage,
      },
      queryParamsHandling: '',
    });
  }

  previous() {
    var position = this.isActive.indexOf(true);

    if (position == 0) {
      this.pageNumbers = this.pageNumbers.map((page) => page - 3);
      this.isActive[position] = false;
      this.isActive[2] = true;
    } else {
      this.isActive[position] = false;
      this.isActive[position - 1] = true;
      if (this.pageNumbers[0] <= 1 && this.isActive[0] == true) {
        this.isDisabledPrev = true;
      }
    }

    this.router.navigate(['/products'], {
      queryParams: {
        pageNumber: this.pageNumbers[this.isActive.indexOf(true)],
        itemsPerPage: this.itemsPerPage,
      },
      queryParamsHandling: '',
    });
  }

  search() {
    this.router.navigate(['/products'], {
      queryParams: {
        filterColumn: 'Title',
        filterValue: this.searchForm.value['title'],
      },
      queryParamsHandling: 'merge',
    });
  }

  startRecording() {
    this.isRecording = true;
    this.recordingService.StartRecording();
  }

  stopRecording() {
    const blob = this.recordingService.StopRecording();
    this.isRecording = false;
  }
}

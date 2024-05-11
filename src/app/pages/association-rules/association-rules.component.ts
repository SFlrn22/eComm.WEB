import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product-service/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AssociationRule } from '../../core/models/AssociationRule';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-association-rules',
  templateUrl: './association-rules.component.html',
  styleUrl: './association-rules.component.scss',
})
export class AssociationRulesComponent implements OnInit {
  searchForm: FormGroup | any = null;
  rules: AssociationRule[] = [];

  private subscription: Subscription | undefined;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      title: new FormControl(''),
    });
  }

  search() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
    this.router.navigate(['/associationrules'], {
      queryParams: {
        title: this.searchForm.value['title'],
      },
      queryParamsHandling: 'merge',
    });
    try {
      this.subscription = this.route.queryParams.subscribe((params: Params) => {
        this.productService
          .getAssociationRules(params)
          .subscribe((data: AssociationRule[]) => {
            this.rules = data;
          });
      });
    } catch {
      if (this.subscription && !this.subscription.closed) {
        this.subscription.unsubscribe();
      }
    }
  }
}

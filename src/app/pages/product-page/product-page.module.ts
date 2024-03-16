import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { ComponentsSharedModule } from '../../shared/components-shared.module';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [CommonModule, ProductPageRoutingModule, ComponentsSharedModule],
})
export class ProductPageModule {}

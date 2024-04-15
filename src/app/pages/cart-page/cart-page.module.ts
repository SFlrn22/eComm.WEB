import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPageRoutingModule } from './cart-page-routing.module';
import { CartPageComponent } from './cart-page.component';
import { ComponentsSharedModule } from '../../shared/components-shared.module';

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, CartPageRoutingModule, ComponentsSharedModule],
})
export class CartPageModule {}

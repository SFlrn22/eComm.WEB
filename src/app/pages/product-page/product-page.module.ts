import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { ComponentsSharedModule } from '../../shared/components-shared.module';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    ComponentsSharedModule,
    QRCodeModule,
  ],
})
export class ProductPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ComponentsSharedModule } from '../../shared/components-shared.module';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ComponentsSharedModule,
    ReactiveFormsModule,
  ],
})
export class ProductsPageModule {}

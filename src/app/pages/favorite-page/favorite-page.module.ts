import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritePageRoutingModule } from './favorite-page-routing.module';
import { FavoritePageComponent } from './favorite-page.component';
import { ComponentsSharedModule } from '../../shared/components-shared.module';

@NgModule({
  declarations: [FavoritePageComponent],
  imports: [CommonModule, FavoritePageRoutingModule, ComponentsSharedModule],
})
export class FavoritePageModule {}

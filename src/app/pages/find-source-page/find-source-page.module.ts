import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindSourcePageRoutingModule } from './find-source-page-routing.module';
import { FindSourcePageComponent } from './find-source-page.component';

@NgModule({
  declarations: [FindSourcePageComponent],
  imports: [CommonModule, FindSourcePageRoutingModule],
})
export class FindSourcePageModule {}

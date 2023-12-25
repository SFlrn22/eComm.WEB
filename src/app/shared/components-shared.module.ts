import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar-component/navbar-component.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer-component/footer-component.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, CarouselComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  exports: [NavbarComponent, FooterComponent, CarouselComponent],
})
export class ComponentsSharedModule {}

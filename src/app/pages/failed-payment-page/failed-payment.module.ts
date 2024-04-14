import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FailedPaymentRoutingModule } from './failed-payment-routing.module';
import { FailedPaymentComponent } from './failed-payment.component';


@NgModule({
  declarations: [
    FailedPaymentComponent
  ],
  imports: [
    CommonModule,
    FailedPaymentRoutingModule
  ]
})
export class FailedPaymentModule { }

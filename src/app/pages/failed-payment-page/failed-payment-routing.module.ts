import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailedPaymentComponent } from './failed-payment.component';

const routes: Routes = [{ path: '', component: FailedPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailedPaymentRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindSourcePageComponent } from './find-source-page.component';

const routes: Routes = [{ path: '', component: FindSourcePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindSourcePageRoutingModule { }

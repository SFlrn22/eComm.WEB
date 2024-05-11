import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationRulesComponent } from './association-rules.component';

const routes: Routes = [{ path: '', component: AssociationRulesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociationRulesRoutingModule { }

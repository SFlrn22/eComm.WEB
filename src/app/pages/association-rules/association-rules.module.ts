import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociationRulesRoutingModule } from './association-rules-routing.module';
import { AssociationRulesComponent } from './association-rules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AssociationRulesComponent],
  imports: [
    CommonModule,
    AssociationRulesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
  ],
})
export class AssociationRulesModule {}

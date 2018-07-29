import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditoRoutingModule } from './credito-routing.module';
import { CreditoComponent } from './credito/credito.component';

@NgModule({
  imports: [
    CommonModule,
    CreditoRoutingModule
  ],
  declarations: [CreditoComponent]
})
export class CreditoModule { }

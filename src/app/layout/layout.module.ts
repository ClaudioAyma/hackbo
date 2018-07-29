import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainContentTwoComponent } from './main-content-two/main-content-two.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, MainHeaderComponent, MainContentComponent, MainFooterComponent, MainContentTwoComponent]
})
export class LayoutModule { }

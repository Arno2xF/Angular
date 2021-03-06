import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [StockComponent, AddComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    WidgetModule,
  ],
})
export class StockModule {}

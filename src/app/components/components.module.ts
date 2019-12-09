import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { IonicModule } from '@ionic/angular';
import { MonthySalesChartComponent } from './monthy-sales-chart/monthy-sales-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { OrderListComponent } from './order-list/order-list.component';



@NgModule({
  declarations: [
    LoadingComponent,
    MonthySalesChartComponent,
    NavbarComponent,
    UserCardComponent,
    OrderListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    LoadingComponent,
    MonthySalesChartComponent,
    NavbarComponent,
    UserCardComponent,
    OrderListComponent,
  ]
})
export class ComponentsModule { }

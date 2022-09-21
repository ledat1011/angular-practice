import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObsSimComponent } from './obs-sim/obs-sim.component';
import { ObsSimDetailComponent } from './obs-sim-detail/obs-sim-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { GetApiService } from './get-api.service';

const routes: Routes = [
  { path: 'detail', component: ObsSimDetailComponent,resolve:{data: GetApiService} },
  { path: "message", component: MessagesComponent },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetApiService } from '../get-api.service';
import { ObsSimDetailComponent } from '../obs-sim-detail/obs-sim-detail.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  {
    path: 'detail', component: ObsSimDetailComponent,
    data: { value: "test Ne" },
    resolve:{data: GetApiService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

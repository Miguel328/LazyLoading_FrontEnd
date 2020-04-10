import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculateComponent } from './components/calculate/calculate.component';

const routes: Routes = [
  {
    path: 'calculate',
    component: CalculateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LazyLoadingRoutingModule { }
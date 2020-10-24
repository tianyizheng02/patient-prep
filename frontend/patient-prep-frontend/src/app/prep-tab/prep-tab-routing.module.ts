import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrepTabPage } from './prep-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PrepTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrepTabPageRoutingModule {}

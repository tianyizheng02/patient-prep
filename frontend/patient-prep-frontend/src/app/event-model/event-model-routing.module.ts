import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventModelPage } from './event-model.page';

const routes: Routes = [
  {
    path: '',
    component: EventModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventModelPageRoutingModule {}

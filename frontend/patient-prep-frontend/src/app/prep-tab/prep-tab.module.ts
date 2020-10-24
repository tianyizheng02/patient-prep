import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrepTabPage } from './prep-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PrepTabPageRoutingModule } from './prep-tab-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: PrepTabPage }]),
    PrepTabPageRoutingModule,
  ],
  declarations: [PrepTabPage]
})
export class PrepTabPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventModelPageRoutingModule } from './event-model-routing.module';

import { EventModelPage } from './event-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventModelPageRoutingModule
  ],
  declarations: [EventModelPage]
})
export class EventModelPageModule {}

import { Component } from '@angular/core';
import {NavController, NavParams, ModalController } from '@ionic/angular';

import * as moment from 'moment';


@Component({
  selector: 'app-event-model',
  templateUrl: './event-model.page.html',
  styleUrls: ['./event-model.page.scss'],
})
export class EventModelPage {



  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();

  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ModalController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.event);
  }

}

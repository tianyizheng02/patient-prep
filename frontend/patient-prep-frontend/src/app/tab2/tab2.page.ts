
import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { EventModelPage } from '../event-model/event-model.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }




  async addEvent() {

    const modal = await this.modalCtrl.create({
      component: EventModelPage,
      componentProps: { selectedDay: this.selectedDay }
    });
    modal.present();

    let response = await modal.onWillDismiss();

    if (response.data) {
      let eventData = response.data;
      eventData.startTime = new Date(response.data.startTime);
      eventData.endTime = new Date(response.data.endTime);
      let events = this.eventSource;
      events.push(eventData);
      this.eventSource = [];
      setTimeout(() => {
        this.eventSource = events;
      });
    }


  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  async onEventSelected(event) {

    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = await this.alertCtrl.create({
      header: event.title,
      message: `<b>From: </b>${start}<br><b>To: </b>${end}`,
      buttons: ['OK']
    })
    alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

  previousMonth() {
    this.calendar.currentDate = new Date(this.calendar.currentDate.setMonth(this.calendar.currentDate.getMonth() - 1));

  }

  nextMonth() {
    this.calendar.currentDate = new Date(this.calendar.currentDate.setMonth(this.calendar.currentDate.getMonth() + 1));

  }

}

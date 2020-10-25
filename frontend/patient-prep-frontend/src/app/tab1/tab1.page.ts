import { Component } from '@angular/core';

import { Router } from '@angular/router'

//import { html, render } from 'lit-html';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nameValue: string = "";
  sexValue: string = "";
  ageValue: number = 0;
  heightType: string = "ft";
  weightType: string = "lbs";
  heightValue1: string = ""; //ft or m
  heightValue2: string = ""; //in or cm
  heightValue: string = "";
  weightValue: number = 0;
  

  constructor(private router: Router) {}

  OnChangeWeight(weightType, weightValue) {
    if (weightType == 'kg') {
      //update profile data after conversion
      weightValue *= 2.205;
    }
  }

  submitInfo() {
    //check to see if all info is submitted

    if (this.heightType == 'ft') {
      this.heightValue = this.heightValue1 + "ft " + this.heightValue2 + "in";
    } else {
      this.heightValue = this.heightValue1 + "m " + this.heightValue2 + "cm";;
    }
    
    //display patient's info on screen, and transition to next screen
    // const profileData = () => html {
    //   <h1>Name: {{ nameValue }}</h1>
    //   <h1>Sex: {{ sexValue }}</h1>
    //   <h1>Age: {{ ageValue }}</h1>
    //   <h1>Height: {{ heightValue }}</h1>
    //   <h1>Weight: {{ weightValue }}</h1
    // }
    //render(profileData, document.body());
    
  }
}

@Component({
  selector: 'slides',
  template: `
    <ion-content>
      <ion-slides pager="true" [options]="slideOpts">
        <ion-slide>
          <ion-grid>
            <ion-row>
              <h1>Slide</h1>
            </ion-row>
            <ion-row>
              <ion-card>
              </ion-card>
            </ion-row>
        </ion-slide>
      </ion-slides>
    </ion-content>
  `
})
export class Slide {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}

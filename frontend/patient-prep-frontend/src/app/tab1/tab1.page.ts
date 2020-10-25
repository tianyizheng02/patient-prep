import { Component } from '@angular/core';

import { Router } from '@angular/router'

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

  OnChangeHeight(heightType, heightValue1, heightValue2) {
    
  }

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

    console.log('name',this.nameValue);
    console.log('sex',this.sexValue);
    console.log('age',this.ageValue);
    console.log('heightValue', this.heightValue);
    console.log('weightValue', this.weightValue, "lbs");
  }
}

@Component({
  selector: 'slides',
  template: `
    <ion-content>
      <ion-slides pager="true" [options]="slideOpts">
        <ion-slide>
          <h1>Slide</h1>
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

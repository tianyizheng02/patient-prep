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
  weightValue: number = 0;
  

  constructor(private router: Router) { //heightValue: number
    //heightValue = 0;
  }

  OnChangeHeight(heightType, heightValue1, heightValue2) {
    if (heightType == 'ft') {
      console.log('ft!');
    } else {
      console.log('meters!');
    }
    console.log("heightValue1", this.heightValue1,"heightValue2", this.heightValue2);

  }

  OnChangeWeight(weightType, weightValue) {
    if (weightType == 'kg') {
      console.log('kg!');
      weightValue *= 2.205;
    } else {
      console.log('lbs!');
    }

    console.log("=============================")
    console.log("weightValue", weightValue);
  }

  submitInfo() {
    //check to see if all info is submitted
    console.log('name',this.nameValue)
    console.log('sex',this.sexValue)
    console.log('age',this.ageValue);
    console.log('heightType',this.heightType);
    console.log('heightValue1', this.heightValue1)
    console.log('heightValue2', this.heightValue2)


  }

}

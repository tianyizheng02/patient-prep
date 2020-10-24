import { Component } from '@angular/core';

@Component({
  selector: 'app-prep-tab',
  templateUrl: 'prep-tab.page.html',
  styleUrls: ['prep-tab.page.scss']
})
export class PrepTabPage {

  constructor() {}

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
export class SlideExample {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prep-tab',
  templateUrl: 'prep-tab.page.html',
  styleUrls: ['prep-tab.page.scss']
})
export class PrepTabPage {

  constructor(private router: Router) { }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  answers = []

  next(slides, ques, ans) {

    let response = {
      'ques': ques,
      'ans': ans,
      'timestamp' : Date.now()
    }
    this.answers.push(response)
    slides.isEnd().then((end) => {
      if (end) {
        console.log(this.answers)
        setTimeout(() => {
          this.router.navigate(['/tabs/tab1'])
        }, 200);
      } else {
        slides.slideNext()

      }

    })



  }



}

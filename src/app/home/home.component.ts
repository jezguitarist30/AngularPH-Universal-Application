import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  slides: Array<any> = new Array<any>();

  constructor() {
    this.slides.push({ image: 'assets/img/banners/angularph-meetup-banner.JPG', caption: 'AngularPH', text: 'Learning and Working together.' });
    this.slides.push({ image: 'assets/img/banners/angularph-workshop-participants-banner.JPG', caption: '', text: '' });
    this.slides.push({ image: 'assets/img/banners/angularph-workshop-banner.JPG', caption: '', text: '' });
  }

  ngOnInit() {

  }

}
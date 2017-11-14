import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  slides: Array<any> = new Array<any>();

  about: string = `<p>We are Filipino developers that loves to code and share. 
  We code with passion to create solutions, We share our experiences 
  to the people that is in need, We inspire the aspiring developers of our country. 
  We eliminate crab mentality and self centered development. 
  We help each other and improve our selves with team work. </p> <br/> 
  
  <p>We choose Angular as our weapon of choice in building web applications, but even though we choose Angular doesn't mean 
  we are not open to other frameworks such as React, Vue and other awesome technology out there. We promote the use of other technologies and let the people decide. </p>`;

  constructor() {
    this.slides.push({ image: 'assets/img/banners/angularph-meetup-banner.JPG', caption: 'AngularPH', text: 'Learning and Working together.' });
    this.slides.push({ image: 'assets/img/banners/angularph-workshop-participants-banner.JPG', caption: '', text: '' });
    this.slides.push({ image: 'assets/img/banners/angularph-workshop-banner.JPG', caption: '', text: '' });
  }

  ngOnInit() {

  }

}
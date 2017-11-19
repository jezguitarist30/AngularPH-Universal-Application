import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent implements OnInit {

  title: string;
  content: string;

  constructor() { 

    this.title = 'Contact Us';
    this.content = 'Please contact us at 12345-6789';

  }

  ngOnInit() {
  }

}

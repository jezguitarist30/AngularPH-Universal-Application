import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent implements OnInit {

  title: string;
  content: string;

  constructor(meta: Meta, title: Title) {

    this.title = 'Contact Us';
    this.content = 'Please contact us at 12345-6789';

    title.setTitle(this.title);

    meta.updateTag({ name: 'description', content: this.content });
    meta.updateTag({ property: 'og:title', content: this.title });
    meta.updateTag({ property: 'og:description', content: this.content });
    meta.updateTag({ property: 'og:image', content: 'https://www.webhostingpad.com/images/contact-us.jpg' });

  }

  ngOnInit() {
  }

}
